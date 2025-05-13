import { buttonVariants } from "./ui/button";

function StatusBudget({ status = "draft" }) {
  let style = {
    draft: {
      dote: "bg-[rgba(55,59,83,1)]",
      text: "text-[rgba(55,59,83,1)]",
      bg: "bg-[rgba(55,59,83,0.05)]",
      dark: "text-[rgba(223, 227, 250, 1)]",
    },
    paid: {
      dote: "bg-[#33D69F]",
      text: "text-[#33D69F]",
      bg: "bg-[rgba(51, 214, 159, 1)]",
      dark: "text-[#33D69F]",
    },
    pending: {
      dote: "bg-[#ff8F00]",
      text: "text-[#ff8F00]",
      bg: "bg-[rgba(255,143,0,0.05)]",
      dark: "text-[rgba(255, 143, 0, 1)]",
    },
  };
  return (
    
    <span
      className={`${buttonVariants({
        variant: "outline",
      })} min-w-[104px] border-none`}
      style={{ backgroundColor: style[status]?.bg }}
    >
      <span
        className={`inline-block w-2 h-2 rounded-full ${style[status]?.dote}`}
      ></span>
      <span className={`capitalize dark:${style[status]?.dark} ${style[status]?.text}`}>{status}</span>
    </span>
  );
}

export default StatusBudget;
