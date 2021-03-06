import React from "react";
import TitleBar from "../../component/TitleBar/TitleBar";
import { getTitleConfig } from "../../lib/config";

const Main = () => {
  return (
    <div>
      <TitleBar 
        config={getTitleConfig("student")}
        defaultOpenKey="sub1"
        defaultSelectedKey="1"
      />
    </div>
  );
};

export default Main;