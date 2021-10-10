import React from "react";

const DateConversion = (props) => {
  const todos = props.todo;
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        const month = new Date(todo.date).toLocaleString("en-US", {
          month: "long",
        });
        const day = new Date(todo.date).toLocaleString("en-US", {
          day: "2-digit",
        });
        const year = new Date(todo.date).getFullYear();

        return (
          <div key={todo._id}>
            {month}
            {day}
            {year}
          </div>
        );
      })}
    </div>
  );
};

export default DateConversion;
