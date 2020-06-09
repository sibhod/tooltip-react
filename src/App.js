import React, { useState } from "react";
import "./App.css";
import debounce from "lodash/debounce";
import ListItem from "./components/ListItem";

const ITEMS = [
  { title: "A", tooltip: "Alpha" },
  { title: "B", tooltip: "Bravo" },
  { title: "C", tooltip: "Charlie" },
  { title: "D", tooltip: "Delta" },
  { title: "E", tooltip: "Echo" },
  { title: "F", tooltip: "Foxtrot" },
  { title: "G", tooltip: "Golf" },
];

const SCROLL_DEBOUNCE_DELAY = 200;

function App() {
  const [hideTooltip, setHideTooltip] = useState(false);

  const handleDebouncedScroll = debounce(
    () => setHideTooltip(false),
    SCROLL_DEBOUNCE_DELAY
  );

  const handleOnScroll = () => {
    setHideTooltip(true);
    handleDebouncedScroll();
  };

  return (
    <div className="app">
      <div className="list-container" onScroll={handleOnScroll}>
        {ITEMS.map(({ title, tooltip }) => (
          <ListItem
            key={title}
            hideTooltip={hideTooltip}
            title={title}
            tooltip={tooltip}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
