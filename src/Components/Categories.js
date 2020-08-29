import React from 'react';
import Playlists from './Playlists';

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
    <div className="mainInner">
      {dataCategories.map((category, id) => (
        <div className="cardsWrap" key={id}>
          <h2>{category.name}</h2>
          <p className="subTitle">{category.tagline}</p>
          <Playlists category_Id={category.id} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
