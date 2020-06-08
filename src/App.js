import React from "react";
import "./App.css";
import ListItem from "./components/ListItem";

const ITEMS = [
  { name: "A", tooltip: "Alpha" },
  { name: "B", tooltip: "Bravo" },
  { name: "C", tooltip: "Charlie" },
  { name: "D", tooltip: "Delta" },
  { name: "E", tooltip: "Echo" },
  { name: "F", tooltip: "Foxtrop" },
  { name: "G", tooltip: "Golf" },
];

function App() {
  return (
    <div className="app">
      <div className="list-container">
        {ITEMS.map(({ name, tooltip }) => (
          <ListItem key={name} name={name} tooltip={tooltip} />
        ))}
      </div>
    </div>
  );
}

export default App;
