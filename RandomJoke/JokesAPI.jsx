import React from "react";
import axios from "axios";

import { useState } from "react";
import ImgMediaCard from "./Card";
const options = {
  method: "GET",
  url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
  params: {
    format: "json",
    contains: "C%23",
    idRange: "0-150",
    blacklistFlags: "nsfw,racist",
  },
  headers: {
    "X-RapidAPI-Key": "84085ec689mshcd84d8eb13728bcp1a591ejsn42ff993c6dfe",
    "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
  },
};

const JokesAPI = () => {
  const [joke, setjoke] = useState([]);

  const fetchJoke = () => {
    axios
      .request(options)
      .then(function (response) {
        setjoke(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return <ImgMediaCard response={joke} generateHandler={fetchJoke} />;
};

export default JokesAPI;
