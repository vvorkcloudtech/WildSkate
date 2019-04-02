import React, { Component } from "react";
import { Route } from "react-router-dom";
import Cart from "./CartPage";
import Index from "./index";
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/CartPage" component={Cart} />
      </div>
    );
  }
}
export default App;