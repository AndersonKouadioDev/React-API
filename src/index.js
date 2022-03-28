import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {orange} from '@mui/material/colors'
import App from "./components/App";

const theme = createTheme({
  palette:{
    primary:{
      main:orange[500]
    }
  }
})
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
