import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { 
  Introduction,
  Login,
  Register,
  Main,
} from "./page/index";

/**
 * @description 组件App，控制路由
 */
const App = () => {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" component={Main} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </HashRouter>
    </div>
  );
};

export default App;