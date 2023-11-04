import React, { Component } from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

class NewsAppBar extends Component {
  render() {
    const { title } = this.props;
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

export default NewsAppBar;
