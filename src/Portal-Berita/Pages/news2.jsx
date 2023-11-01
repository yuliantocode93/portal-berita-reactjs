import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import axios from "axios";
import SearchBar from "../Components/SearchBar";
import NewsPage from "../Components/NewsPage";
import ErrorAlert from "../Components/ErrorAlert";

const apiKey = "47eb6134e647457384a0da41bd4610f7";

export default function News2({ country = "id" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = (keyword) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    if (keyword !== "") {
      url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
    }

    getNews(url);
  };

  const getNews = (url) => {
    setIsLoading(true);
    setErrorMessage("");
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.articles);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    handleSearch("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <Container maxWidth={false} disableGutters>
      <SearchBar label="Search News" isLoading={isLoading} callback={handleSearch} />
      {errorMessage === "" ? (
        <Box sx={{ py: "1em", px: "1em", overflow: "hidden" }}>
          <NewsPage isLoading={isLoading} data={data} />
        </Box>
      ) : (
        <ErrorAlert msg={errorMessage} />
      )}
    </Container>
  );
}
