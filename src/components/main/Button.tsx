import type { ButtonProps } from "../../utils/types";

const Button = ({ label, icon: Icon }: ButtonProps) => {
  return (
    <button className="flex flex-col items-center gap-1 p-2 text-ui-text-primary hover:text-ui-accent transition-colors duration-300 rounded-2xl w-15 cursor-pointer text-[12px] font-semibold hover:font-bold hover:bg-ui-primary">
      <Icon size={14}/>
      {label}
    </button>
  );
};

export default Button;
