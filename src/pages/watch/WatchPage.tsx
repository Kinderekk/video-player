import React, { useEffect, useState } from 'react';
import MovieContainer from '../../components/MovieContainer/MovieContainer';
import RelatedMoviesContainer from '../../components/RelatedMoviesContainer/RelatedMoviesContainer';
import { getMovie } from '../../services/movie';
import { Movie } from '../../types/movie';
import './WatchPage.scss';

function WatchPage() {
  const [movie, setMovie] = useState<Movie | undefined>();
  const isLoading = false;

  useEffect(() => {
    getMovie()
      .then(data => setMovie(data))
      .catch(err => {
        //TODO
      });
  }, []);

  return (
    <div>
      { !isLoading && movie && (
        <div className="pageContainer">
          <MovieContainer movie={movie} />
          <RelatedMoviesContainer movies={movie.relatedMovies} />
        </div>
      )}
    </div>
  );
}

export default WatchPage;
