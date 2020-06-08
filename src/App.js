import React, { useRef, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  const anchorRef = useRef(null);
  return (
    <div className="app">
      <div className="anchor" ref={anchorRef}>
        Anchor
      </div>
      <Tooltip anchorRef={anchorRef} />
    </div>
  );
}

export default App;
