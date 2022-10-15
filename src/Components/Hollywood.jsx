import React,{useState,useEffect} from "react";
import Data from "./Data";
import Articles from "./Articles";
import Title from "./Title";
import Latest from "./Latest";
import "./Style.css";
import apiData from "./API";
const Hollywood = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      setData(await apiData());
    };
    Fetching();
  }, [data]);
  // const { id, title, Description, category, Date } = Data;
  return (
    <div>
      <Title title="Hollywood" />
      <div className="articleData">
        <div className="rightArticle">
          {data && data.filter((data) => data.Category === "Hollywood").map((data) => (
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
          { data.length>1 &&
          <Latest
              key={Data[0].id}
              title={Data[0].Title}
              img={Data[0].image}
              category={Data[0].Category}
              date={Data[0].Date}
            />
          }
            {data && data.filter((data) => data.Category === "Hollywood").map(
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

export default Hollywood;