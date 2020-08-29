import React from 'react';

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: 'Home playlist 1',
      img:
        'https://images.unsplash.com/photo-1598587409999-40cb3ca06135?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vero.',
    },
    {
      id: 102,
      category_id: 3,
      name: 'Home playlist 2',
      img:
        'https://images.unsplash.com/photo-1598468079983-58dac033e299?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, similique.',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1598496213554-b4d11aa90d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=674&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia?',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 1',
      img:
        'https://images.unsplash.com/photo-1598580431211-3b32fe73167e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, exercitationem.',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playlist 1',
      img:
        'https://images.unsplash.com/photo-1591051414372-c67995cfc844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia?',
    },
    {
      id: 106,
      category_id: 2,
      name: 'Mood playlist 1',
      img:
        'https://images.unsplash.com/photo-1598626492568-cf43bedba843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia?',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playlist 2',
      img:
        'https://images.unsplash.com/photo-1598550465631-9c5d569b094c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quia?',
    },
  ];

  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_Id
  );

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist) => (
        <div className="card">
          <div className="cardImage">
            <img src={playlist.img} alt="Pic 1" />
          </div>
          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span>{playlist.desc}</span>
            <span className="playIcon">
              <i class="fas fa-play" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlists;
