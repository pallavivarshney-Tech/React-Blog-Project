import React,{useState,useEffect} from "react";
import Articles from "./Articles";
import Latest from "./Latest";
import Story from "./Story";
import Title from "./Title";
import Data from "./Data";
import apiData from "./API";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const Fetching = async () => {
      setData(await apiData());
    };
    Fetching();
  }, [data]);
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="head">
        <div className="leftimg">
          <h1>The vertical Gallery</h1>
          <p>21 Sep 2022</p>
        </div>
        <div className="rightimg">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667__340.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2019/03/31/14/31/houses-4093227__340.jpg"
            alt=""
          />
        </div>
      </div>

      <Title title="The Latest" />
      <div className="latestData">
      

        {data && data.filter((data) => data.Category === "Latest").map((data) => (
          <Latest
            key={data.id}
            title={data.Title}
            img={data.image}
            pera={data.Description}
            category={data.Category}
            date={data.Date}
          />
        ))}
        {/* </div> */}
      </div>
      <Title title="Latest Articles" />
      <div className="articleData">
        <div className="rightArticle">
          {data && data.filter((data) => data.Category === "Bollywood").map((data) => (
            <Articles
              key={data.id}
              title={data.Title}
              img={data.image}
              pera={(data.Description).slice(0,200)}
              category={data.Category}
              date={data.Date}
            />
          ))}

          <div className="articleimg">
            <h1>Title of the Vertical gallery</h1>
            <p>31 Dec 2022</p>
          </div>
        </div>
        <div className="leftArticle">
          <div className="advertisement">Advertisement</div>
          <Title title="Top Posts" />
          {
            data.length>1 &&
          <div>
            {/* <Latest /> */}
            <Latest
              key={data[0].id}
              title={data[0].Title}
              img={data[0].image}
              category={data[0].Category}
              date={data[0].Date}
            />
            <Articles
              key={data[0].id}
              title={data[0].Title}
              img={data[0].image}
              category={data[0].Category}
              date={data[0].Date}
            />{" "}
            <Articles
              key={data[7].id}
              title={data[7].Title}
              img={data[7].image}
              category={data[7].Category}
              date={data[7].Date}
            />{" "}
            <Articles
              key={data[14].id}
              title={data[14].Title}
              img={data[14].image}
              category={data[14].Category}
              date={data[14].Date}
            />{" "}
            <Articles
              key={data[20].id}
              title={data[20].Title}
              img={data[20].image}
              category={data[20].Category}
              date={data[20].Date}
            />{" "}
          </div>
          }
        </div>
      </div>
      <Title title="Top Stories" />
      <br />
      <hr />
      <div className="topStory">
        <Story
          heading="catch Waves with  the adventure guide"
          para="Gujarat is vastly unrrated and it is a mystery to us why the region isn't more well "
          title="Tech"
          date="12 July 1987"
        />
        <hr />
        <Story
          heading="catch Waves with  the adventure guide"
          para="Gujarat is vastly unrrated and it is a mystery to us why the region isn't more well"
          title="Tech"
          date="20 June 1986"
        />
        <hr />
        <Story
          heading="catch Waves with  the adventure guide"
          para="Gujarat is vastly unrrated and it is a mystery to us why the region isn't more well"
          title="Tech"
          date="19 April 2020"
        />
      </div>
      <hr />
    </div>
  );
};

export default Home;