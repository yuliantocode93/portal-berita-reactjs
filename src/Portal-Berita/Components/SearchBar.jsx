import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, TextField } from "@mui/material";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSearch = () => {
    const { callback } = this.props;
    const { text } = this.state;
    callback(text);
  };

  render() {
    const { label, isLoading } = this.props;
    const { text } = this.state;

    return (
      <Grid container sx={{ px: "1em", py: "1em" }}>
        <Grid item sm sx={{ pr: "1em" }}>
          <TextField id="outlined basic" label={label} variant="outlined" size="small" fullWidth disabled={isLoading} value={text} onChange={this.handleTextChange} />
        </Grid>
        <Grid item sm={1}>
          <Button variant="contained" disabledElevation fullWidth disabled={isLoading} onClick={this.handleSearch}>
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  label: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default SearchBar;
