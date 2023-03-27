
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const renderContent = () => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a Answer — <strong>check it out!</strong>
    </Alert>
  );
};
export default function ActionAreaCard(props) {
  console.log(props);
  //   console.log(props.data[0].title);
  console.log(props.data[0].question);

  //   const [title, question, answer] = props.data;
  //   console.log(title);
  //   console.log(question);
  //   console.log(answer);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data[0].title && "Misc"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data[0].question}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data[0].answer}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button
        variant="contained"
        size="small"
        endIcon={<SendIcon />}
        onClick={renderContent}
      >
        Get Answer
      </Button>
    </Card>
  );
}
