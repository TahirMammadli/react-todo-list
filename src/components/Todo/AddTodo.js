import { React, useRef } from "react";
import styles from "./AddTodo.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddTodo = (props) => {
  const title = useRef();
  const content = useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(title.current.value, content.current.value)
    const todo = { title: title.current.value, content: content.current.value };
    props.addTodo(todo);
  }

  return (
    <Card className={styles.card}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="">Title</label>
        <input type="text" ref={title} />
        <label htmlFor="">Content</label>
        <input type="text" ref={content} />
        <Button>Add Todo</Button>
      </form>
    </Card>
  );
};

export default AddTodo;
