import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./Tooltip.css";

const propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  hidden: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

const Tooltip = ({ anchorRef, hidden, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ left: "0px", top: "0px" });
  const containerRef = useRef(document.createElement("div"));

  const setPositionFromBounds = (bounds) => {
    setPosition({
      left: `${bounds.left + bounds.width}px`,
      top: `${bounds.top + bounds.height * 0.5}px`,
    });
  };

  useEffect(() => {
    const containerEl = containerRef.current;
    containerEl && document.body.appendChild(containerEl);
    return () => containerEl && document.body.removeChild(containerEl);
  });

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);
    let anchorElement = anchorRef.current;

    if (anchorElement) {
      anchorElement.addEventListener("mouseover", handleMouseOver);
      anchorElement.addEventListener("mouseleave", handleMouseOut);

      const bounds = anchorElement.getBoundingClientRect();
      setPositionFromBounds(bounds);
    }

    return () => {
      if (anchorElement) {
        anchorElement.removeEventListener("mouseover", handleMouseOver);
        anchorElement.removeEventListener("mouseleave", handleMouseOut);
      }
    };
  }, [anchorRef]);

  // Update position when isHovering
  useEffect(() => {
    if (isHovering && anchorRef.current) {
      setPositionFromBounds(anchorRef.current.getBoundingClientRect());
    }
  }, [isHovering, anchorRef]);

  const renderTooltip = () => (
    <div style={position} className="tooltip">
      <div className="tooltip-content">{title}</div>
    </div>
  );

  return isHovering && !hidden
    ? createPortal(renderTooltip(), containerRef.current)
    : null;
};

Tooltip.propTypes = propTypes;

export default Tooltip;
