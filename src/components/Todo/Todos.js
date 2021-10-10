import { React } from "react";
import Todo from "./Todo";
import styles from "./Todos.module.css";


const Todos = (props) => {
  const todos = props.todo;
  return (
      <div className={styles['todos']}>
        <Todo todo={todos} />
        {/* <DateConversion todo={todos} /> */}
      </div>
  );
};

export default Todos;
