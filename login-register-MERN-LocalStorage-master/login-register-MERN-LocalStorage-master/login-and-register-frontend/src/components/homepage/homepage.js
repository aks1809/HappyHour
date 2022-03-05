import React, { useEffect, useState } from 'react';
import './homepage.css';

const api_key = 'AIzaSyDQmZgn1ZYJNblexWz6kxAxygVS4yahVmQ';
const video_http = 'https://www.googleapis.com/youtube/v3/videos?';

const Homepage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        video_http +
          new URLSearchParams({
            key: api_key,
            part: 'snippet',
            chart: 'mostPopular',
            maxResults: 50,
            regionCode: 'IN',
          })
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <nav class="navbar">
        <div class="toggle-btn">
          <span />
          <span />
          <span />
        </div>
        <img src="assets/img/logo.PNG" class="logo" alt="" />
        <div class="search-box">
          <input type="text" class="search-bar" placeholder="search" />
          <button class="search-btn">
            <img src="assets/img/search.PNG" alt="" />
          </button>
        </div>
        <div class="user-options">
          <a href="/" class="ticket">
            <img
              src="assets/img/ticket.PNG"
              height="60px"
              width="120px"
              alt=""
            />
          </a>
          <img src="assets/img/video.PNG" class="icon" alt="" />
          <img src="assets/img/grid.PNG" class="icon" alt="" />
          <img src="assets/img/bell.PNG" class="icon" alt="" />
          <div class="user-dp">
            <img src="assets/img/profile-pic.png" alt="" />
          </div>
        </div>
      </nav>

      {/* <!-- sidebar --> */}
      <div class="side-bar">
        <a href="/" class="links active">
          <img src="assets/img/home.PNG" alt="" />
          home
        </a>
        <a href="/" class="links">
          <img src="assets/img/explore.PNG" alt="" />
          explore
        </a>
        <a href="/" class="links">
          <img src="assets/img/subscription.PNG" alt="" />
          subscription
        </a>
        <hr class="seperator" />
        <a href="/" class="links">
          <img src="assets/img/library.PNG" alt="" />
          library
        </a>
        <a href="/" class="links">
          <img src="assets/img/history.PNG" alt="" />
          history
        </a>
        <a href="/" class="links">
          <img src="assets/img/your-video.PNG" alt="" />
          your video
        </a>
        <a href="/" class="links">
          <img src="assets/img/watch-later.PNG" alt="" />
          watch later
        </a>
        <a href="/" class="links">
          <img src="assets/img/liked video.PNG" alt="" />
          like video
        </a>
        <a href="/" class="links">
          <img src="assets/img/show more.PNG" alt="" />
          show more
        </a>
      </div>

      {/* <!-- filters --> */}
      <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">Zakir Khan</button>
        <button class="filter-options">Anubhav Singh Bassi</button>
        <button class="filter-options">Kannan Gill</button>
        <button class="filter-options">Kenny Sebastian</button>
        <button class="filter-options">Kapil Sharma</button>
        <button class="filter-options">Louis C.K.</button>
        <button class="filter-options">Vir Das</button>
        <button class="filter-options">Rohan Joshi</button>
        <button class="filter-options">Tanmay Bhat</button>
        <button class="filter-options">Gaurav Kapoor</button>
      </div>

      {/* <!-- videos --> */}
      <div class="video-container">
        {data
          ? data?.items?.map((e, index) => {
              return (
                <div
                  class="video"
                  style={{ cursor: 'pointer' }}
                  key={index}
                  onClick={() =>
                    window.open(`https://youtube.com/watch?v=${e.id}`, '_blank')
                  }
                >
                  <img
                    src={e.snippet.thumbnails.high.url}
                    class="thumbnail"
                    alt=""
                  />
                  <div class="content">
                    <img src={e.channelThumbnail} class="channel-icon" alt="" />
                    <div class="info">
                      <h4 class="title">{e.snippet.title}</h4>
                      <p class="channel-name">{e.snippet.channelTitle}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Homepage;
