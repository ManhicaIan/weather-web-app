import { type ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return (
    <h4 className="text-[12px] font-bold uppercase tracking-wide text-ui-text-primary">
      {children}
    </h4>
  );
};

export default Title;
