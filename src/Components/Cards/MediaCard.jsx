import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Breadcrumbs, Link } from "@mui/material";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Dog
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dog are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <p>by</p>
          <Link underline="hover" color="orange" href="/">
            Admin
          </Link>
          <Link underline="hover" color="orange" href="/">
            Uncategorised
          </Link>
          <Typography color="text.primary">June 20, 2022</Typography>
        </Breadcrumbs>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
