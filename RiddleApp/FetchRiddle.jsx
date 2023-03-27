import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ActionAreaCard from "./RiddleCard";
const options = {
  method: "GET",
  url: "https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles",
  headers: {
    "X-RapidAPI-Key": "84085ec689mshcd84d8eb13728bcp1a591ejsn42ff993c6dfe",
    "X-RapidAPI-Host": "riddles-by-api-ninjas.p.rapidapi.com",
  },
};
const FetchRiddle = () => {
  const [Riddle, setRiddle] = useState([]);
  const riddleData = () => {
    axios
      .request(options)
      .then(function (response) {
        setRiddle(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
      }}
    >
      <Button variant="outlined" onClick={riddleData}>
        Refresh
      </Button>
      <ActionAreaCard data={Riddle} />
    </Box>
  );
};

export default FetchRiddle;
