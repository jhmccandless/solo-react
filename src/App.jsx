import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { AppBar, Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core/";
import store from "./store";
import { Provider } from "react-redux";

import BlogMain from "./components/BlogMain";
import mainBackgroundImg from "./blog-background.jpeg";
import headerBackgroundImg from "./header-background.jpeg";
import { color } from "@material-ui/system";

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
              }}
            >
              <header
                className="App-header"
                style={{
                  borderRadius: "30px",
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
                    <a>
                      <Link
                        style={{
                          textDecoration: "none",
                          fontSize: "calc(15px + 2vmin)",
                          fontWeight: "bold",
                          color: "rgb(255, 143, 143)",
                          textShadow: "1px 1px 4px #000000",
                          fontFamily: "cursive",
                        }}
                        to="/dashboard"
                      >
                        Blogging Molly
                      </Link>
                    </a>
                  </Box>
                  <Box margin="0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                        fontFamily: "cursive",
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
                        fontFamily: "cursive",
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
                        fontFamily: "cursive",
                      }}
                      to="/about_me"
                    >
                      About Me
                    </Link>
                  </Box>
                  <Box margin="0 7% 0 20px">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(255, 143, 143)",
                        textShadow: "1px 1px 4px #000000",
                        fontFamily: "cursive",
                      }}
                      to="/contact_me"
                    >
                      Contact Me
                    </Link>
                  </Box>
                </Box>
              </header>
              <BlogMain />
            </div>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
