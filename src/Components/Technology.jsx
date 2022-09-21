import React from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";

const Technology = () => {
  // const { id, title, Description, category, Date } = Data;
  return (
    <div>
      <Title title="Technology" />
      <div className="articleData">
        <div className="rightArticle">
          {Data.filter((data) => data.Category === "Technology").map((data) => (
            <Articles
              index={data.id}
              title={data.Title}
              img={data.image}
              pera={data.Description}
              category={data.Category}
              date={data.Date}
            
         
            />
          ))}
        </div>
        <div className="leftArticle">
          <Title title="Top Posts" />
          <div>
      
            {Data.filter((data) => data.Category === "Technology").map(
              (data) => (
                <Articles
                index={data.id}
              title={data.Title}
              img={data.image}
        
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

export default Technology;