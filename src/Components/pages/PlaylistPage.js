import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
  let { id } = useParams();
  return (
    <div>
      <div className="playInfo">
        <div className="playListImg">
          <img
            src="https://images.unsplash.com/photo-1598550465631-9c5d569b094c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
        </div>
        <h1>Title</h1>
        <span>Spotify</span>
        <button>Play</button>
        <div className="icons">
          <div className="iconsHeart"></div>
          <div className="iconsDots"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quas!
        </p>
      </div>
      <div className="playListSongs">
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
          <li>Song 4</li>
          <li>Song 5</li>
          <li>Song 6</li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistPage;
