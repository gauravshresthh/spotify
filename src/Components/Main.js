import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="mainNav">Hello world</div>
      <div className="mainContent">
        <div className="cardsWrap">
          <h1>Your Favourites</h1>
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h3>Liked Songs</h3>
              <span className="playIcon">
                <i class="fas fa-play" />
              </span>
            </div>
          </div>
        </div>

        <div className="cardsWrap">
          <h2>Focus</h2>
          <p className="subTitle">Music to help you concentrate.</p>
          <span>See all</span>
          <div className="cardsWrapInner">
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                  alt="Pic 1"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate</span>
                <span className="playIcon">
                  <i class="fas fa-play" />
                </span>
              </div>
            </div>
            <div className="card">
              <div className="cardImage">
                <img
                  src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                  alt="Pic 1"
                />
              </div>
              <div className="cardContent">
                <h3>Music for concentration</h3>
                <span>Music to help you concentrate</span>
                <span className="playIcon">
                  <i class="fas fa-play" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
