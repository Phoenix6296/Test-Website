import MediaCard from "../Cards/MediaCard";
import { Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  //This state is used to store the data retured through API
  const [image, setImage] = useState([]);
  //This state is used to take care of the page no.
  const [page, setPage] = useState(1);

  //This function is used to do the API call and get the data
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?page=${page}&client_id=d8kUDbSMHFdYRfSQ9YaeDLjnWXhbv5366v-YoHy-9h4`
    );
    console.log(response.data);
    const data = await response.data;
    setImage(data);
  };

  //On page change we call the function.
  useEffect(() => {
    fetchData();
  }, [page]);

  //This function is used to change the page no.
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage(page + 1);
    window.scrollTo({ top: 0 });
  };

  //This function is used to take care of the scroll event
  window.addEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleScroll);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    //Iterated over the mediaCard to display the data
    <Box
      className="home"
      //Custom defined css for the material UI.
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        flexWrap: "wrap",
        margin: "0.5rem",
        mb: "5rem",
        justifyContent: "space-evenly",
      }}
    >
      {image.length > 0 &&
        image.map((item) => {
          return (
            //Props passed to the MediaCard
            <MediaCard
              key={item.id}
              image={item.urls.small}
              title={item.user.name}
              link1={item.user.portfolio_url}
              link2={item.user.portfolio_url}
              description={item.user.bio}
              ad={item.user.first_name}
              cat={item.user.last_name}
              date={item.updated_at.substring(0, 10)}
            />
          );
        })}
    </Box>
  );
};

export default Home;
