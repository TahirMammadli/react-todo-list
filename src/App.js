import { Fragment } from "react/cjs/react.production.min";
import { useEffect, useState, useCallback } from "react";
import AddTodo from "./components/Todo/AddTodo";
import Todos from "./components/Todo/Todos";

function App() {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = useCallback(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((res) => {
        setResponse(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTodoHandler = useCallback((todo) => {
    fetch("http://localhost:8080/new-todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }, [])
  useEffect(() => {
    getTodos();
  }, [getTodos]);
  console.log(response)
  return (
    <Fragment>
      <AddTodo addTodo={addTodoHandler} />
      {!isLoading && <Todos todo={response} />}
      {isLoading && <p>Loading...</p>}
    </Fragment>
  );
}

export default App;
