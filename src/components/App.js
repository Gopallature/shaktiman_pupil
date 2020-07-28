import React from "react";

import Characterlist from "./characterlist";
import Herolist from "./herolist";
import Rating from "./rating";
export default function App() {
  return (
    <div className="App">
      <h2>supersquad</h2>
      <div className="col-md-4">
        <Characterlist />
      </div>
      <div className="col-md-4">
        <Herolist />
      </div>
      <div className="col-md-4">
        <Rating />
      </div>
    </div>
  );
}
