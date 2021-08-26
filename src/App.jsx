import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import store from "./store";
import { Provider } from "react-redux";

import BlogMain from "./components/BlogMain";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import AddPost from "./components/AddPost";
import PostDetail from "./components/PostDetail";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Box display="flex" flexWrap="wrap" justifyContent="center">
              <div className="App">
                <Box className="header-box">
                  <header className="App-header">
                    <Box className="inner-header-box">
                      <Box className="site-name-box">
                        <Link className="site-name" to="/dashboard">
                          Typical Forum
                        </Link>
                      </Box>
                      <Box className="link-box">
                        <Link className="link-style" to="/dashboard">
                          Dashboard
                        </Link>
                      </Box>
                      <Box className="link-box">
                        <Link className="link-style" to="/add_post">
                          Add Post
                        </Link>
                      </Box>
                      <Box className="link-box">
                        <Link className="link-style" to="/about_me">
                          About Us
                        </Link>
                      </Box>
                      <Box className="link-box">
                        <Link className="link-style" to="/contact_me">
                          Contact Us
                        </Link>
                      </Box>
                    </Box>
                  </header>
                  <Switch>
                    <Route exact path="/dashboard" component={BlogMain} />
                    <Route path="/add_post" component={AddPost} />
                    <Route path="/contact_me" component={ContactMe} />
                    <Route path="/about_me" component={AboutMe} />

                    <Route path="/post_detail/:index" component={PostDetail} />
                    <Route path="/delete_confirm/:index" />
                    <Route path="*">
                      <Redirect to="/dashboard" />
                    </Route>
                  </Switch>
                </Box>
              </div>
            </Box>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
