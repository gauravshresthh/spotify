import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistPage = () => {
  let { id } = useParams();
  return <div>This is an individual Playlist {id}</div>;
};

export default PlaylistPage;
