import React from 'react';
import './homepage.css';

const Homepage = () => {
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
        <div class="video">
          <img src="assets/img/profile-pic.png" class="thumbnail" alt="" />
          <div class="content">
            <img src="assets/img/profile-pic.png" class="channel-icon" alt="" />
            <div class="info">
              <h4 class="title">first video | 2022</h4>
              <p class="channel-name">modern web</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Helmet>
        <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        />
        <script src="app1.js" type="text/javascript" />
      </Helmet> */}
    </div>
  );
};

export default Homepage;
