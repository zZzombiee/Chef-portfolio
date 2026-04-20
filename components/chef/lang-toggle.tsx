import ENG from "@/public/svg/eng";
import MNG from "@/public/svg/mng";

function FlagSwitch({
  language,
  onToggle,
}: {
  language: "mn" | "en";
  onToggle: () => void;
}) {
  const isMN = language === "mn";

  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border border-border bg-muted hover:bg-background transition-all duration-200"
    >
      {isMN ? <MNG /> : <ENG />}
      {isMN ? "МН" : "EN"}
    </button>
  );
}

export default FlagSwitch;
