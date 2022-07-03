import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" height="300" image={props.image} alt="Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <p>by</p>
          <Link underline="hover" color="orange" href={props.link1}>
            {props.ad}
          </Link>
          <Link underline="hover" color="orange" href={props.link2}>
            {props.cat}
          </Link>
          <Typography color="text.primary">{props.date}</Typography>
        </Breadcrumbs>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
