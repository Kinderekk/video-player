import React from 'react';
import MovieContainer from '../../components/MovieContainer/MovieContainer';
import RelatedMoviesContainer from '../../components/RelatedMoviesContainer/RelatedMoviesContainer';
import './WatchPage.scss';

function WatchPage() {
  return (
    <div className="pageContainer">
      <MovieContainer />
      <RelatedMoviesContainer />
    </div>
  );
}

export default WatchPage;
