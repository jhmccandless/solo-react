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
import headerBackground from ''

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <div className="App">
              <header className="App-header">
                <Box
                  style={backgroundImage: }
                  display="flex"
                  alignItems="center"
                  width={"100%"}
                  margin="0 300px"
                >
                  <Box flexGrow={1} width="200px">
                    <h2>
                      <Link style={{ textDecoration: "none" }} to="/dashboard">
                        Blogging Molly
                      </Link>
                    </h2>
                  </Box>
                  <Box margin="0 10px">
                    <Link style={{ textDecoration: "none" }} to="/dashboard">
                      Dashboard
                    </Link>
                  </Box>
                  <Box margin="0 10px">
                    <Link style={{ textDecoration: "none" }} to="/add_post">
                      Add Post
                    </Link>
                  </Box>
                  <Box margin="0 10px">
                    <Link style={{ textDecoration: "none" }} to="/about_me">
                      About Me
                    </Link>
                  </Box>
                  <Box margin="0 10px">
                    <Link style={{ textDecoration: "none" }} to="/contact_me">
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
