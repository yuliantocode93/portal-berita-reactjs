import React, { Component } from "react";
import { Alert, AlertTitle } from "@mui/material";

class ErrorAlert extends Component {
  render() {
    const { msg } = this.props;
    return (
      <Alert severity="error" sx={{ mx: "1em", my: "1em" }}>
        <AlertTitle>Oooops...</AlertTitle>
        {msg}
      </Alert>
    );
  }
}

export default ErrorAlert;
