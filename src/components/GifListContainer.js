import React, { useState, useEffect } from "react";

export default function GifListContainer() {
  const [state, setState] = useState();
  //     {
  // img1:'',
  // img2:'',
  // img3:''
  //     }

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphins%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then((res) => res.json())
      .then(({ data }) => {
        setState(data.map((imgUrl) => ({ url: imgUrl.images.url })));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(state);
  return <div>ppp</div>;
}
