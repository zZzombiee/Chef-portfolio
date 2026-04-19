import ENG from "@/public/svg/eng";
import MNG from "@/public/svg/mng";

function FlagToggle({
  language,
  onToggle,
}: {
  language: "mn" | "en";
  onToggle: () => void;
}) {
  const flagMN = <MNG />;

  const flagEN = <ENG />;

  const Opt = ({
    lang,
    flag,
    label,
  }: {
    lang: string;
    flag: React.ReactNode;
    label: string;
  }) => (
    <button
      onClick={lang !== language ? onToggle : undefined}
      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
        language === lang
          ? "bg-background text-foreground border border-border"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {flag}
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-0.5 bg-muted border border-border rounded-full p-0.5">
      <Opt lang="mn" flag={flagMN} label="МН" />
      <Opt lang="en" flag={flagEN} label="EN" />
    </div>
  );
}

export default FlagToggle;
