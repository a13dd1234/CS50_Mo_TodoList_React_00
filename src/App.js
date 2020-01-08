import React, { Component } from "react";
import { render } from "react-dom";

import Hello from "./Hello";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <hr />
        <TodoList />
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
