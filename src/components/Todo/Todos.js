import { React } from "react";
import Todo from "./Todo";
import styles from "./Todos.module.css";
import Gist from "react-gist";

const Todos = () => {
  return (
    <div>
      <ul className={styles["todo-list"]}>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <div className={styles.gist}>
        <Gist id="2620840e2c3f2c73b9183705c4c55569" />
      </div>
      </ul>
      
    </div>
  );
};

export default Todos;
