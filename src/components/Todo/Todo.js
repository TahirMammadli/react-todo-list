import { React, useContext } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Todo.module.css";
import TodoContext from "../../store/todoContext";

const Todo = (props) => {
  const todos = props.todo;
  const ctx = useContext(TodoContext);

  function editTodoHandler(todoId) {
    console.log('clicked')
    ctx.editTodoHandler(todoId);
  }
  function deleteTodoHandler(todoId) {
    console.log('clicked')
    ctx.deleteTodoHandler(todoId);
  }

  return (
    <Fragment>
      {todos.map((todo) => {
        const month = new Date(todo.date).toLocaleString("en-US", {
          month: "long",
        });
        const day = new Date(todo.date).toLocaleString("en-US", {
          day: "2-digit",
        });
        const year = new Date(todo.date).getFullYear();

        return (
          <ul key={todo._id} className={styles["todo-list"]}>
            <Card className={styles["todo-card"]}>
              <li className={styles["list-item"]}>
                <h1 className={styles.title}>{todo.title}</h1>
                <p className={styles.content}>{todo.content}</p>
                <p className={styles.date}>
                  {month} {day} {year}
                </p>
                <div className={styles.buttons}>
                  <Button
                    onClick={() => editTodoHandler(todo._id)}
                    className={styles.button}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteTodoHandler(todo._id)}
                    className={styles.button}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            </Card>
          </ul>
        );
      })}
    </Fragment>
  );
};

export default Todo;
