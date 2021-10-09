import React from "react";
import styles from "./AddTodo.module.css";
import Card from "../UI/Card";

const AddTodo = () => {
  return (
    <Card className={styles.card}>
      <form className={styles.form}>
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Content</label>
        <input type="text" />
        <button>Add Todo</button>
      </form>
    </Card>
  );
};

export default AddTodo;
