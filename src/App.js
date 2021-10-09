import { Fragment } from "react/cjs/react.production.min";
import { useState } from "react";
import AddTodo from "./components/Todo/AddTodo";
import Todos from "./components/Todo/Todos";

function App() {
  // fetch("http://localhost:8080")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  // fetch("http://localhost:8080/new-todo/", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     title: "first todo",
  //     content: "this is the first todo",
  //   }),
  // })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <Fragment>
      <AddTodo />
      <Todos />
    </Fragment>
  );
}

export default App;
