import React from 'react';

const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: 'Focus',
      tagline: 'Music to help you concentrate',
    },
    {
      id: 2,
      name: 'Mood',
      tagline: 'Playlist to match your mood',
    },
    {
      id: 3,
      name: 'Soundtrack your home',
      tagline: '',
    },
    {
      id: 4,
      name: 'Kick back this Sunday..',
      tagline: 'Music to help you concentrate',
    },
  ];
  return (
    <div>
      {dataCategories.map((category) => (
        <div className="cardsWrap">
          <h2>{category.name}</h2>
          <p className="subTitle">{category.tagline}</p>

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
      ))}
    </div>
  );
};

export default Categories;
