import React from "react";
import { NavLink } from "react-router-dom";

const Articles = (props) => {


  return (
    <NavLink
      state={{
        title: props.title,
        img: props.img,
        description: props.pera,
        Date: props.date,
        index: props.index,
        category: props.category,

      }}
      // to={`/category/${props.category}/${props.index}`}
      to="/Blog"
    >
      <div className="artflex" key={props.index}>
        <div className="artflex1">
          <img src={props.img} alt="Some information" />
        </div>
        <div>
          {/* <h3>Catch Waves with the adventure guide</h3> */}
          <h3>{props.title}</h3>
          <p>{props.pera}</p>
          <h5>{`${props.category} / ${props.date}`}</h5>
        </div>
      </div>
    </NavLink>
  );
};

export default Articles;

 