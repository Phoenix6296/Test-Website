import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";

//This is the card of the Material UI with some props added.
export default function MediaCard({
  image,
  title,
  description,
  link1,
  link2,
  ad,
  cat,
  date,
}) {
  return (
    <Card
      sx={{
        width: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <CardMedia component="img" height="300" image={image} alt="Image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <p>by</p>
          <Link underline="hover" color="orange" href={link1}>
            {ad}
          </Link>
          <Link underline="hover" color="orange" href={link2}>
            {cat}
          </Link>
          <Typography color="text.primary">{date}</Typography>
        </Breadcrumbs>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
