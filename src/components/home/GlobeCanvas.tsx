import { useEffect, useRef } from "react";
import {
  AmbientLight,
  BackSide,
  BufferAttribute,
  BufferGeometry,
  Color,
  DirectionalLight,
  Group,
  Line,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  QuadraticBezierCurve3,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
  WireframeGeometry,
} from "three";

const isReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const GlobeCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight || width, 1);
    const mobile = window.innerWidth < 768;
    const reducedMotion = isReducedMotion();
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const scene = new Scene();
    const camera = new PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.4);

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: !mobile,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.3 : 1.8));
    renderer.setSize(width, height);
    renderer.outputColorSpace = SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const disposableGeometries: BufferGeometry[] = [];
    const disposableMaterials: Array<{ dispose: () => void }> = [];

    const group = new Group();
    scene.add(group);

    const globeGeometry = new SphereGeometry(1.55, mobile ? 32 : 40, mobile ? 32 : 40);
    const globeMaterial = new MeshPhongMaterial({
      color: new Color("#0b1a2c"),
      emissive: new Color("#00aee1"),
      emissiveIntensity: 0.1,
      shininess: 80,
      specular: new Color("#81e3ff"),
      transparent: true,
      opacity: 0.92,
    });
    disposableGeometries.push(globeGeometry);
    disposableMaterials.push(globeMaterial);

    const globe = new Mesh(globeGeometry, globeMaterial);
    group.add(globe);

    const wireframeSphere = new SphereGeometry(1.58, 18, 18);
    const wireframeGeometry = new WireframeGeometry(wireframeSphere);
    const wireframeMaterial = new LineBasicMaterial({
      color: new Color("#62dfff"),
      transparent: true,
      opacity: 0.24,
    });
    disposableGeometries.push(wireframeSphere, wireframeGeometry);
    disposableMaterials.push(wireframeMaterial);

    const wireframe = new LineSegments(wireframeGeometry, wireframeMaterial);
    group.add(wireframe);

    const atmosphereGeometry = new SphereGeometry(1.9, 28, 28);
    const atmosphereMaterial = new MeshBasicMaterial({
      color: new Color("#00c2ff"),
      transparent: true,
      opacity: 0.08,
      side: BackSide,
    });
    disposableGeometries.push(atmosphereGeometry);
    disposableMaterials.push(atmosphereMaterial);

    const atmosphere = new Mesh(atmosphereGeometry, atmosphereMaterial);
    group.add(atmosphere);

    const starGeometry = new BufferGeometry();
    const starCount = mobile ? 320 : 640;
    const starVertices = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const radius = MathUtils.randFloat(4.2, 8.4);
      const theta = MathUtils.randFloatSpread(360);
      const phi = MathUtils.randFloatSpread(360);
      const vector = new Vector3().setFromSphericalCoords(
        radius,
        MathUtils.degToRad(theta),
        MathUtils.degToRad(phi),
      );
      starVertices[i * 3] = vector.x;
      starVertices[i * 3 + 1] = vector.y;
      starVertices[i * 3 + 2] = vector.z;
    }

    starGeometry.setAttribute("position", new BufferAttribute(starVertices, 3));
    const starsMaterial = new PointsMaterial({
      color: new Color("#9eeeff"),
      size: mobile ? 0.03 : 0.024,
      transparent: true,
      opacity: 0.78,
    });
    disposableGeometries.push(starGeometry);
    disposableMaterials.push(starsMaterial);

    const stars = new Points(starGeometry, starsMaterial);
    scene.add(stars);

    const markerMaterial = new MeshBasicMaterial({ color: new Color("#baf5ff") });
    const markerGeometry = new SphereGeometry(0.04, 12, 12);
    const arcMaterial = new LineBasicMaterial({
      color: new Color("#00d4ff"),
      transparent: true,
      opacity: 0.42,
    });
    disposableGeometries.push(markerGeometry);
    disposableMaterials.push(markerMaterial, arcMaterial);

    const markerPositions = [
      [0.4, 0.85],
      [1.1, 1.6],
      [1.6, 2.3],
      [2.2, 3.15],
      [0.95, 4.4],
      [1.8, 5.15],
    ] as const;

    markerPositions.forEach(([lat, lon], index) => {
      const position = new Vector3().setFromSphericalCoords(1.58, lat, lon);
      const marker = new Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      group.add(marker);

      if (index === 0) return;

      const previous = new Vector3().setFromSphericalCoords(
        1.58,
        markerPositions[index - 1][0],
        markerPositions[index - 1][1],
      );
      const mid = previous.clone().add(position).multiplyScalar(0.5).normalize().multiplyScalar(2.2);
      const curve = new QuadraticBezierCurve3(previous, mid, position);
      const points = curve.getPoints(32);
      const arcGeometry = new BufferGeometry().setFromPoints(points);
      disposableGeometries.push(arcGeometry);

      const arc = new Line(arcGeometry, arcMaterial);
      group.add(arc);
    });

    const ambientLight = new AmbientLight("#d8fbff", 0.9);
    const directionalLight = new DirectionalLight("#7edfff", 1.9);
    directionalLight.position.set(4, 3, 5);
    const rimLight = new PointLight("#00d4ff", 1.2, 12);
    rimLight.position.set(-3, -2, 4);
    scene.add(ambientLight, directionalLight, rimLight);

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;
    let disposed = false;
    let inViewport = true;
    let pageVisible = !document.hidden;

    const renderScene = () => {
      frameId = 0;
      if (disposed || !inViewport || !pageVisible) return;

      group.rotation.y += reducedMotion ? 0.0014 : 0.0034;
      group.rotation.x += (pointerY * 0.18 - group.rotation.x) * 0.03;
      group.rotation.z += (pointerX * 0.1 - group.rotation.z) * 0.03;
      stars.rotation.y -= 0.0008;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderScene);
    };

    const startAnimation = () => {
      if (!frameId && !disposed && inViewport && pageVisible) {
        frameId = window.requestAnimationFrame(renderScene);
      }
    };

    const stopAnimation = () => {
      if (!frameId) return;
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const handleResize = () => {
      const nextWidth = Math.max(container.clientWidth, 1);
      const nextHeight = Math.max(container.clientHeight || nextWidth, 1);
      const nextMobile = window.innerWidth < 768;

      camera.aspect = nextWidth / nextHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, nextMobile ? 1.3 : 1.8));
      renderer.setSize(nextWidth, nextHeight);
    };

    const handleVisibilityChange = () => {
      pageVisible = !document.hidden;

      if (pageVisible) {
        startAnimation();
        return;
      }

      stopAnimation();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = Boolean(entry?.isIntersecting);

        if (inViewport) {
          startAnimation();
          return;
        }

        stopAnimation();
      },
      { threshold: 0.08 },
    );

    observer.observe(container);

    if (finePointer) {
      container.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      disposed = true;
      stopAnimation();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (finePointer) {
        container.removeEventListener("pointermove", handlePointerMove);
      }

      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }

      disposableGeometries.forEach((geometry) => geometry.dispose());
      disposableMaterials.forEach((material) => material.dispose());
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
