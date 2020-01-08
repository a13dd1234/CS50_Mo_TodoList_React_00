import React, { Component } from "react";
import { render } from "react-dom";

import Hello from "./Hello";
import TodoList from "./TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 0, text: "My First Todo", Checked: false },
        { id: 1, text: "My Second Todo", Checked: false },
        { id: 2, text: "My Thired Todo", Checked: false }
      ]
    };
  }
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
// export default function App() {
//   return (
//     <div className="App">
//       <Hello />
//     </div>
//   );
// }
