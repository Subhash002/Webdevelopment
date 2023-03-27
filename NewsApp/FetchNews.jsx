import axios from "axios";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import MediaCard from "./Card";
import React from "react";
import { useState } from "react";
import SearchAppBar from "./NewsBar";

const FetchNews = () => {
  const [news, setnews] = useState([]);
  const NewsData = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=418025aa8fda4da6b6412bdd3e270ab4"
      )
      .then((res) => {
        console.log(res.data);
        setnews(res.data.articles);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container maxWidth="sm">
      <SearchAppBar />
      <Button variant="contained" endIcon={<SendIcon />} onClick={NewsData}>
        Trending Headlines
      </Button>
      {news.map((i) => {
        return <MediaCard APIdata={i} />;
      })}
    </Container>
  );
};

export default FetchNews;
