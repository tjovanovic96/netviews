import React, { useEffect, useState } from "react";
import "../../css/core/Tabs.css";
import "../../css/Common.css";
import { Button } from "react-bootstrap";

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState("");

  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <div className="tabs">
      <ul className="tab-header">
        {tabHeader.map((item) => (
          <li
            onClick={() => changeTab(item)}
            key={item}
            className={item === active ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
      <hr className="tabs-hr"/>
      <div className="tab-content">
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return <div class="tab-child">{childContent[key]}</div>;
          } else {
            return null;
          }
        })}
      </div>
      <div className="tab-controls">
        <button className="white-button">Back</button>
        <button className="yellow-button">Next</button>
      </div>
    </div>
  );
};

export default Tabs;