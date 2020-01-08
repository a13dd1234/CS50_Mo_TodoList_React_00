import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="Hello">
        <Hello />
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
