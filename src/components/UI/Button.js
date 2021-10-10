import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const className = `${styles.button} ${props.className}`;
  return <button onClick={props.onClick} className={className}>{props.children}</button>;
};

export default Button;
