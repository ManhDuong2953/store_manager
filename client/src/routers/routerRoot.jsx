import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import router from "../configs/router";
import { Fragment } from "react";
const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        {router.map((route, index) => {
          let NavBar = Fragment;
          let Footer = Fragment;
          if (route.layoutDefaults) {
            const [navbar, footer] = route.layoutDefaults;
            NavBar = navbar;
            Footer = footer;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  <NavBar />
                  <route.component style={{ "minHeight": "100vh", "margin": "50px auto 100px" }} />
                  <Footer />
                </>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default RouterConfig;
