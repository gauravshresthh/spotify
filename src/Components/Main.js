import React from 'react';
import Categories from './Categories';

const Main = () => {
  return (
    <div className="main">
      <div className="mainNav">Hello world</div>
      <div className="mainContent">
        <Categories />
        {/* <div className="cardsWrap">
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
        </div> */}
      </div>
    </div>
  );
};

export default Main;
