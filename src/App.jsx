import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: '#131921',
    },
    secondary: {
      main: '#232f3e',
    },
    background: {
      default: '#eaeded',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
