import React from "react";
import { useLocation } from "react-router-dom";

export default function Blog() {
  const location = useLocation();
  console.log("location data", location);
  console.log("Image data :", location.state.img);

  return (
    <div className="blogPage">
      <h1>{location.state.title} </h1>
      <img src={location.state.img} alt="" height="500px" width="600px"/>
      <p>{location.state.description} </p>
      <h5>{location.state.Date}</h5>
    </div>
  );
}