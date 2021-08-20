import React from "react";

export default function GifList({ gifImg }) {
  return (
      <ul style={{listStyle:'none'}}
      >
      <li style={{ display: "block" }}>
        <img
          src={gifImg}
          alt="gif"
          style={{ width: "200px", height: "200px" }}
        />
      </li>
    </ul>
  );
}
