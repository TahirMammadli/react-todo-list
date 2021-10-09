import React from "react";
import Card from "../UI/Card";
import styles from "./Todo.module.css";

const Todo = () => {
  return (
    <li className={styles.li}>
      <Card className={styles.todo}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.content}>This is a Todo</p>
      </Card>
    </li>
  );
};

export default Todo;
