import React from "react";

const ColorfulMessage = (props) => {
  const contentLedyStyle = {
    color: props.color,
    fontSize: "18px"
  };

  return <p style={contentLedyStyle}>{props.children}</p>;
};

export default ColorfulMessage;
