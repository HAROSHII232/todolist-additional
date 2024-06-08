import { ButtonHTMLAttributes } from "react";
import s from "./superButton.module.css";

/* type Props = {
  onClick: () => void;
  color: string;
  children?: ReactNode;
}; */

type ColorsProps = {
  color1?: string;
  color2?: string;
  color3?: string;
  color4?: string;
  color5?: string;
};

type Props = { backGround?: string } & ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<ColorsProps, "color4" | "color5">;

export const SuperButton = ({
  onClick,
  color,
  children,
  className,
  disabled,
  ...restProps
}: Props) => {
  const finalClassName = ` 
  ${s.button}
  ${color === "red" ? s.red : color === "secondary" ? s.secondary : s.default}
  ${disabled ? s.disabled : ""}`;

  return (
    <button onClick={onClick} className={finalClassName} /* {...restProps} */>
      {children}
    </button>
  );
};
