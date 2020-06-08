import React, { useRef } from "react";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";

const propTypes = {
  hideTooltip: PropTypes.bool,
  title: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

const ListItem = ({ hideTooltip, title, tooltip }) => {
  const anchorRef = useRef(null);
  return (
    <>
      <div className="list-item" ref={anchorRef}>
        {title}
      </div>
      <Tooltip anchorRef={anchorRef} hidden={hideTooltip} title={tooltip} />
    </>
  );
};

ListItem.propTypes = propTypes;

export default ListItem;
