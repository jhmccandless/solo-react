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

import mainBackgroundImg from "./blog-background.jpeg";
import headerBackgroundImg from "./header-background.jpeg";

const theme = createTheme({});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <div
              className="App"
              style={{
                backgroundImage: `url(${mainBackgroundImg} )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                minHeight: "100vh",
                // fontFamily: "cursive",
              }}
            >
              <header
                className="App-header"
                style={{
                  borderRadius: "7px",
                  backgroundImage: `url(${headerBackgroundImg})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "75px",
                  margin: "0px 10px 0px 10px",
                }}
              >
                <Box display="flex" alignItems="center" width={"100%"}>
                  <Box
                    flexGrow={1}
                    style={{
                      textAlign: "left",
                      margin: "0 0 0 8%",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: "none",
                        fontSize: "calc(15px + 2vmin)",
                        fontWeight: "bold",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                      }}
                      to="/dashboard"
                    >
                      Typical Forum
                    </Link>
                  </Box>
                  <Box margin="0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                      }}
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </Box>
                  <Box margin="0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                      }}
                      to="/add_post"
                    >
                      Add Post
                    </Link>
                  </Box>
                  <Box margin="0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                      }}
                      to="/about_me"
                    >
                      About Us
                    </Link>
                  </Box>
                  <Box margin="0 7% 0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                      }}
                      to="/contact_me"
                    >
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
            </div>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
