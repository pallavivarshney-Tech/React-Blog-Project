import React,{useState,useEffect} from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";
import apiData from "./API";

const Fitness = () => {
  // const { id, title, Descriptio
  const [data, setData] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      setData(await apiData());
    };
    Fetching();
  }, [data])
  return (
    <div>
      <Title title="Fitness" />
      <div className="articleData">
        <div className="rightArticle">
          {data && data.filter((data) => data.Category === "Fitness").map((data) => (
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
          {
            data.length>1 &&
          
          <Latest
              key={Data[15].id}
              title={Data[15].Title}
              img={Data[15].image}
              category={Data[15].Category}
              date={Data[15].Date}
            />
          }
            {data && data.filter((data) => data.Category === "Fitness").map(
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