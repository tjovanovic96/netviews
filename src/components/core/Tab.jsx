import React from "react";
import { Button } from "react-bootstrap";

const Tab = (props) => {
  return (<div className="tab-pane">{props.children}</div>);
};

export default Tab;