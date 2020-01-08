import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList(props) {
  return (
    <div>
      <h2>Todo List App</h2>
      {/* {console.log("todos Array: ", props.todos)} */}
      <ul>
        {props.todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
