import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Person4Icon from "@mui/icons-material/Person4";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
export default function ImgMediaCard(props) {
  console.log(props);
  const date = new Date(props.APIdata.publishedAt);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const URL = "https://picsum.photos/200";
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="Image not found"
        height="140"
        image={props.APIdata.urlToImage || URL}
      />
      <CardContent>
        <Chip icon={<AccessTimeFilledTwoToneIcon />} label={formattedDate} />
        <Chip
          icon={<Person4Icon />}
          label={props.APIdata.author || "Anonymous"}
        />

        <Typography gutterBottom variant="h5" component="div">
          {props.APIdata.title}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {props.APIdata.content}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          {props.APIdata.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Chip icon={<NewspaperIcon />} label={props.APIdata.source.name} />

        <Button size="small" href={props.APIdata.url}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
