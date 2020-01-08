import React from "react";
// {console.log("TodoItem - todo Item: ", props.todo)}

export default function TodoItem(props) {
  return (
    <li key={props.todo.id}>
      <span>{props.todo.text}</span>
      <input type="checkbox" />
      <button>Delet</button>
    </li>
  );
}
