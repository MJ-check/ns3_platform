import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { 
  //Introduction,
  Login,
  Register,
  Class,
  Lab,
  Home,
} from "./page/index";

/**
 * @description 组件App，控制路由
 */
const App = () => {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/class" component={Class}/>
        <Route path="/lab" component={Lab}/>
        <Route path="/home" component={Home}/>
      </HashRouter>
    </div>
  );
};

export default App;