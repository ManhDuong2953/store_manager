// RouteConfig.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import router from "../configs/router";
import "./RouterRoot.scss";

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        {router.map((route, index) => {
          const Layout = route.navBar ? <NavBar className="router_nav" /> : <div className="tag-fake"></div>;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <div id="App_main">
                  {Layout}
                  <div className="router_component">
                    <route.component />
                  </div>
                </div>
              }
            />)
        })}
        {router.map((route) => (
          route.children &&
          route.children.map((routeChild, index) => {
            const Layout = routeChild.navBar ? <NavBar className="router_nav" /> : <div className="tag-fake"></div>;
            return (
              <Route
                key={index}
                path={`${route.path}/${routeChild.path}`}
                element={
                  <div id="App_main">
                    {Layout}
                    <div className="router_component">
                      <routeChild.component />
                    </div>
                  </div>
                }
              />)
          })
        ))}




      </Routes>
    </Router >
  );
};

export default RouterConfig;

