import { useEffect, useState } from 'react';
import MovieContainer from '../../components/MovieContainer/MovieContainer';
import RelatedMoviesContainer from '../../components/RelatedMoviesContainer/RelatedMoviesContainer';
import { getMovie } from '../../services/movie';
import { Movie } from '../../types/movie';
import './WatchPage.scss';

function WatchPage() {
  const [movie, setMovie] = useState<Movie | undefined>();
  const [error, setError] = useState();
  const isLoading = false;

  useEffect(() => {
    getMovie()
      .then(data => setMovie(data))
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <div>
      { !isLoading && movie && !error && (
        <div className="pageContainer">
          <MovieContainer movie={movie} />
          <RelatedMoviesContainer movies={movie.relatedMovies} />
        </div>
      )}
      {error && (
        <div className="error">There was error fetching data</div>
      )}
    </div>
  );
}

export default WatchPage;
