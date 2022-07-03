import MediaCard from "../Cards/MediaCard";
import { Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://api.unsplash.com/photos/?page=${page}&client_id=d8kUDbSMHFdYRfSQ9YaeDLjnWXhbv5366v-YoHy-9h4`
    );
    console.log(response.data);
    const data = await response.data;
    setImage(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

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

  window.addEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleScroll);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <Box
      className="home"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        flexWrap: "wrap",
        //Hide the scroll bar on media query of 600px
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {image.length > 0 &&
        image.map((item) => {
          return (
            <MediaCard
              key={item.id}
              image={item.urls.small_s3}
              title={item.user.name}
              link1={item.user.portfolio_url}
              link2={item.user.portfolio_url}
              description={item.user.bio}
              ad={item.user.first_name}
              cat={item.user.last_name}
              date={item.updated_at}
            />
          );
        })}
    </Box>
  );
};

export default Home;
