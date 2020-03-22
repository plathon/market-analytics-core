import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from "antd";

import Routes from "./Routes";

import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
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

          <Layout style={{ paddingLeft: 50 }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
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
    </Layout>
  );
}

export default App;
