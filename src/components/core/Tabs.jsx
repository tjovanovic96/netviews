import React, { useEffect, useState } from "react";
import "../../css/core/Tabs.css";
import "../../css/Common.css";
import { Button } from "react-bootstrap";

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [childProps, setChildProps] = useState({});
  const [active, setActive] = useState("");
  const [firstRender, setFirstRender]= useState(true);


  useEffect(() => {
    const headers = [];
    const childCnt = {};
    const childProps = {};
    React.Children.forEach(children, (element) => {
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
      childProps[name] = element.props.children.props;
    });

    setTabHeader(headers);
    if (firstRender) {
      setFirstRender(false);
      setActive(headers[0]);
    }
    setChildProps({ ...childProps });
    setChildConent({ ...childCnt });
  }, [props, children, firstRender]);

  const changeTab = (name) => {
    setActive(name);
  };

  const goBack = () => {
    React.Children.forEach(children, (element, index) => {
      const { name } = element.props;
      if (name === active) {
        setActive(children[index - 1].props.name);
      }
    });
  }

  const goNext = async () => {
    React.Children.forEach(children, async (element, index) => {
      const { name } = element.props;
      if (name === active) {
        await children[index].props?.completeCallback?.();
        setActive(children[index + 1].props.name);
      }
    });
  }

  const lastTab = tabHeader[tabHeader.length - 1] === active;

  console.log(childProps);

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
      {!lastTab && <div className="tab-controls">
        <button className="white-button" onClick={goBack}>Back</button>
      <button className="yellow-button" onClick={goNext} disabled={childProps?.[active]?.nextDisabled}>{lastTab ? "Finish" : "Next"}</button>
      </div>}
    </div>
  );
};

export default Tabs;