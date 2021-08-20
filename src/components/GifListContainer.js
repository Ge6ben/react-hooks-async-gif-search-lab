import React, { useState, useEffect } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default function GifListContainer() {
  const [querySearch, setQuerySearch] = useState("panda");
  const [data, setData] = useState([]);
  const API_Key = "ef9FSon5QRV38w5qZRvLnqCaBU28rCrW";
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${querySearch}%20QUERY%20HERE&api_key=${API_Key}&rating=g&limit=3`
    )
      .then((res) => res.json())
      .then(({ data }) => {
        const gifData = data.map((imgUrl) => ({
          url: imgUrl.images.original.url,
        }));
        setData(gifData);
        //   console.log(data);
      })
      .catch((err) => console.log(err));
  }, [querySearch]);

  console.log(data);
  return (
    <div style={{ display: "flex" }}>
      {data.map((gif) => (
        <GifList key={gif.id} gifImg={gif.url} />
      ))}
      <GifSearch setQuerySearch={setQuerySearch} />
    </div>
  );
}
