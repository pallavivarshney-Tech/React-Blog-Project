import React from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";

const Fitness = () => {
  // const { id, title, Description, category, Date } = Data;
  return (
    <div>
      <Title title="Fitness" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Fitness").map((data) => (
            <Articles
              index={data.id}
              title={data.Title}
              img={data.image}
              pera={(data.Description).slice(0,300)}
              category={data.Category}
              date={data.Date}
            />
          ))}
        </div>
        <div className="leftArticle">
          <Title title="Top Posts" />
          <div>
          <Latest
              key={Data[15].id}
              title={Data[15].Title}
              img={Data[15].image}
              category={Data[15].Category}
              date={Data[15].Date}
            />{" "}
            {Data.filter((data) => data.Category === "Fitness").map(
              (data) => (
                <Articles
                  key={data.id}
                  title={data.Title}
                  img={data.image}
                  // pera={data.Description}
                  category={data.Category}
                  date={data.Date}
                />
              )
            )}
            {/* <Articles />
            <Articles />
            <Articles /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitness;