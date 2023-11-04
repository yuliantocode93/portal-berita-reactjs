import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import NewsCard from "./NewsCard";

class NewsPage extends Component {
  render() {
    const { isLoading = true, data } = this.props;

    return (
      <Grid container spacing={2}>
        {(isLoading ? Array.from(new Array(4)) : data).map((item, index) => (
          <Grid item sm={3} key={index}>
            <NewsCard article={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

NewsPage.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default NewsPage;
