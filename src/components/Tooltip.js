import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Tooltip.css";

const propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.any }).isRequired,
  title: PropTypes.string.isRequired,
};

const Tooltip = ({ anchorRef, title }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ left: "0px", top: "0px" });

  useEffect(() => {
    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);
    let anchorElement = anchorRef.current;

    if (anchorElement) {
      anchorElement.addEventListener("mouseover", handleMouseOver);
      anchorElement.addEventListener("mouseleave", handleMouseOut);

      const bounds = anchorElement.getBoundingClientRect();

      setPosition({
        left: `${bounds.left + bounds.width}px`,
        top: `${bounds.top + bounds.height * 0.5}px`,
      });
    }

    return () => {
      if (anchorElement) {
        anchorElement.removeEventListener("mouseover", handleMouseOver);
        anchorElement.removeEventListener("mouseleave", handleMouseOut);
      }
    };
  }, [anchorRef]);

  return isHovering ? (
    <div style={position} className="tooltip">
      {title}
    </div>
  ) : null;
};

Tooltip.propTypes = propTypes;

export default Tooltip;
