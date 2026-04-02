type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
