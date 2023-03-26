import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const URL = "https://picsum.photos/200";

export default function ImgMediaCard({ generateHandler, response }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Button size="small" onClick={generateHandler}>
        Generate New
      </Button>
      <CardMedia component="img" alt="green iguana" height="140" image={URL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {response.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Q-{response.setup}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Ans-{response.delivery}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Type : {response.type}</Button>
      </CardActions>
    </Card>
  );
}
