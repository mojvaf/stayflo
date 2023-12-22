import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
