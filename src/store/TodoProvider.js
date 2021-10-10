import React from "react";
import TodoContext from "./todoContext";

const TodoProvider = () => {
  function editTodoHandler(todoId) {
    fetch('http://localhost:8080/update/' + todoId, {
      method: "PUT",
    })
      .then((res) => console.log(res, "updated successfully"))
      .then.catch((err) => console.log(err));
  }
  function deleteTodoHandler(todoId) {
    fetch('http://localhost:8080/delete/' + todoId, {
      method: "DELETE",
    })
      .then((res) => console.log(res, "deleted successfully"))
      .catch((err) => console.log(err));
  }
  const todoContext = {
    editTodoHandler: editTodoHandler,
    deleteTodoHandler: deleteTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
