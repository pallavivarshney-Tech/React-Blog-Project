import React from "react";
import Articles from "./Articles";
import Latest from "./Latest";
import Story from "./Story";
import Title from "./Title";
import Data from "./Data";

const Home = () => {
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
      

        {Data.filter((data) => data.Category === "Latest").map((data) => (
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
          {Data.filter((data) => data.Category === "Bollywood").map((data) => (
            <Articles
              key={data.id}
              title={data.Title}
              img={data.image}
              pera={data.Description}
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
          <div>
            {/* <Latest /> */}
            <Latest
              key={Data[0].id}
              title={Data[0].Title}
              img={Data[0].image}
              category={Data[0].Category}
              date={Data[0].Date}
            />{" "}
            <Articles
              key={Data[0].id}
              title={Data[0].Title}
              img={Data[0].image}
              category={Data[0].Category}
              date={Data[0].Date}
            />{" "}
            <Articles
              key={Data[7].id}
              title={Data[7].Title}
              img={Data[8].image}
              category={Data[7].Category}
              date={Data[7].Date}
            />{" "}
            <Articles
              key={Data[14].id}
              title={Data[14].Title}
              img={Data[14].image}
              category={Data[14].Category}
              date={Data[14].Date}
            />{" "}
            <Articles
              key={Data[20].id}
              title={Data[20].Title}
              img={Data[20].image}
              category={Data[20].Category}
              date={Data[20].Date}
            />{" "}
          </div>
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