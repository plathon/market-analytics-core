import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import FirebaseContext from "./context/FirebaseContext";
import Firebase from "./Firebase";
import Routes from "./Routes";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <FirebaseContext.Provider value={Firebase}>
        <Router>
          {/* Render topbar */}
          {Routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.topbar}
            />
          ))}

          <Layout>
            {/* Render sidebar */}
            {Routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}

            <Layout style={{ padding: 20 }}>
              <Content>
                {/* Render main */}
                {Routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Content>
            </Layout>
          </Layout>
        </Router>
      </FirebaseContext.Provider>
    </Layout>
  );
}

export default App;
