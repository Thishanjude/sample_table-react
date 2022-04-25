import { Button } from "antd";
import React, { useState } from "react";
import "../css/App/tabs.css";
import Lists from "./list";
import Lists2 from "./list2";
import Lists3 from "./list3";

const Tabs = () => {
  const [activetab, setActivetab] = useState(1);

  const currentactive = (index) => {
    setActivetab(index);
  };
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={activetab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => currentactive(1)}
        >
          Table 1
        </button>
        <button
          className={activetab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => currentactive(2)}
        >
          Table 2
        </button>
        <button
          className={activetab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => currentactive(3)}
        >
          Table 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={activetab === 1 ? "content  active-content" : "content"}
        >
          <hr />
          <div>
            <Lists />
          </div>
        </div>
        <div
          className={activetab === 2 ? "content  active-content" : "content"}
        >
          <hr />
          <div>
            <Lists2 />
          </div>
        </div>
        <div
          className={activetab === 3 ? "content  active-content" : "content"}
        >
          <hr />
          <div>
            <Lists3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
