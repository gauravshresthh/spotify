import React from 'react';

const Main = () => {
  return (
    <div className="main">
      <div className="mainNav">Hello world</div>
      <div className="mainContent">
        <h2>Your Favourites</h2>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h4>Liked Songs</h4>
              <span className="playIcon">
                <i class="fas fa-play" />
              </span>
            </div>
          </div>
        </div>

        <h3>Focus</h3>
        <div className="cardsWrap">
          <div className="card">
            <div className="cardImage">
              <img
                src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"
                alt="Pic 1"
              />
            </div>
            <div className="cardContent">
              <h4>Liked Songs</h4>
              <span className="playIcon">
                <i class="fas fa-play" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
