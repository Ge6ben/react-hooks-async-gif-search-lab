import React, { useState, useEffect } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default function GifListContainer() {
  const [querySearch, setQuerySearch] = useState("panda");
  const [data, setData] = useState([]);
  const API_Key = "ef9FSon5QRV38w5qZRvLnqCaBU28rCrW";

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${querySearch}&api_key=${API_Key}&rating=g&limit=3`
    )
      .then((res) => res.json())

        .then(({ data }) =>
        setData(data.map((gif) => ({ url: gif.images.original.url })))
      )
      .catch((error) => console.log(error));
  }, [querySearch]);

  return (
    <div style={{ display: "flex" }}>
      {data.map((gif) => (
        <GifList key={gif.id} gifImg={gif.url} />
      ))}

          <GifSearch setQuerySearch={ setQuerySearch}/>
    </div>
  );
}
