import React from "react";
import { Provider } from "react-redux";
import Layout from "./Layouts/Layout";
import store from "./store";

import "./App.css"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
