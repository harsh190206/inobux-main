import { useEffect, useRef } from "react";
import * as THREE from "three";

const isReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const GlobeCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || width;
    const mobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !mobile,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const globeGeometry = new THREE.SphereGeometry(1.55, 44, 44);
    const globeMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color("#0b1a2c"),
      emissive: new THREE.Color("#00aee1"),
      emissiveIntensity: 0.1,
      shininess: 80,
      specular: new THREE.Color("#81e3ff"),
      transparent: true,
      opacity: 0.92,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    group.add(globe);

    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.SphereGeometry(1.58, 20, 20)),
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#62dfff"),
        transparent: true,
        opacity: 0.24,
      }),
    );
    group.add(wireframe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 32, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#00c2ff"),
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      }),
    );
    group.add(atmosphere);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = mobile ? 500 : 900;
    const starVertices = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const radius = THREE.MathUtils.randFloat(4.2, 8.4);
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const vector = new THREE.Vector3()
        .setFromSphericalCoords(radius, THREE.MathUtils.degToRad(theta), THREE.MathUtils.degToRad(phi));
      starVertices[i * 3] = vector.x;
      starVertices[i * 3 + 1] = vector.y;
      starVertices[i * 3 + 2] = vector.z;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: new THREE.Color("#9eeeff"),
        size: mobile ? 0.03 : 0.024,
        transparent: true,
        opacity: 0.8,
      }),
    );
    scene.add(stars);

    const markerMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color("#baf5ff") });
    const markerGeometry = new THREE.SphereGeometry(0.04, 12, 12);
    const arcMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#00d4ff"),
      transparent: true,
      opacity: 0.42,
    });

    const markerPositions = [
      [0.4, 0.85],
      [1.1, 1.6],
      [1.6, 2.3],
      [2.2, 3.15],
      [0.95, 4.4],
      [1.8, 5.15],
    ];

    markerPositions.forEach(([lat, lon], index) => {
      const position = new THREE.Vector3().setFromSphericalCoords(1.58, lat, lon);
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      group.add(marker);

      if (index === 0) return;
      const previous = new THREE.Vector3().setFromSphericalCoords(
        1.58,
        markerPositions[index - 1][0],
        markerPositions[index - 1][1],
      );
      const mid = previous.clone().add(position).multiplyScalar(0.5).normalize().multiplyScalar(2.2);
      const curve = new THREE.QuadraticBezierCurve3(previous, mid, position);
      const points = curve.getPoints(40);
      const arc = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), arcMaterial);
      group.add(arc);
    });

    const ambientLight = new THREE.AmbientLight("#d8fbff", 0.9);
    const directionalLight = new THREE.DirectionalLight("#7edfff", 1.9);
    directionalLight.position.set(4, 3, 5);
    const rimLight = new THREE.PointLight("#00d4ff", 1.3, 12);
    rimLight.position.set(-3, -2, 4);
    scene.add(ambientLight, directionalLight, rimLight);

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reducedMotion = isReducedMotion();

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      group.rotation.y += reducedMotion ? 0.0018 : 0.0038;
      group.rotation.x += (pointerY * 0.18 - group.rotation.x) * 0.03;
      group.rotation.z += (pointerX * 0.1 - group.rotation.z) * 0.03;
      stars.rotation.y -= 0.0008;
      renderer.render(scene, camera);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const handleResize = () => {
      const nextWidth = container.clientWidth;
      const nextHeight = container.clientHeight || nextWidth;
      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(nextWidth, nextHeight);
    };

    container.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeChild(renderer.domElement);
      globeGeometry.dispose();
      globeMaterial.dispose();
      starGeometry.dispose();
      markerGeometry.dispose();
      markerMaterial.dispose();
      arcMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[380px] w-full overflow-hidden rounded-[2rem] sm:h-[460px] lg:h-[540px]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_45%,rgba(0,174,225,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-8 bottom-8 h-20 rounded-full bg-primary/15 blur-3xl" />
    </div>
  );
};

export default GlobeCanvas;
