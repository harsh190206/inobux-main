import { useTheme } from "next-themes";

const AnimatedShaderBackground = () => {
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme !== "light";

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,225,0.22),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(98,223,255,0.12),transparent_24%),linear-gradient(145deg,rgba(4,10,22,0.96),rgba(8,17,33,0.94))]"
            : "bg-[radial-gradient(circle_at_18%_22%,rgba(0,174,225,0.16),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(98,223,255,0.12),transparent_22%),linear-gradient(145deg,rgba(243,249,255,0.96),rgba(230,240,250,0.92))]"
        }`}
      />
      <div className="aurora-grid absolute inset-0 opacity-60" />
      <div className="absolute left-[8%] top-[20%] h-52 w-52 animate-pulse rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute bottom-[14%] right-[10%] h-72 w-72 rounded-full bg-primary-glow/10 blur-3xl [animation:float_14s_ease-in-out_infinite_alternate]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
};

export default AnimatedShaderBackground;
