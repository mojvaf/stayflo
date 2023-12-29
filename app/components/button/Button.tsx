import React, { ReactNode, MouseEventHandler } from "react";
import styles from "./button.module.css";
import Loading from "../loading/loading";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: string;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  loading,
}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {loading ? <Loading /> : children}
    </button>
  );
};

export default Button;
