import React, { useRef } from "react";
import PropTypes from "prop-types";
import Tooltip from "./Tooltip";

const propTypes = {
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

const ListItem = ({ name, tooltip }) => {
  const anchorRef = useRef(null);
  return (
    <>
      <div className="list-item" ref={anchorRef}>
        {name}
      </div>
      <Tooltip anchorRef={anchorRef} title={tooltip} />
    </>
  );
};

ListItem.propTypes = propTypes;

export default ListItem;
