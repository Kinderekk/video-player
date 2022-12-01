import { RelatedMovie } from '../../types/movie';
import MovieThumbnail from '../MovieThumbnail/MovieThumbnail';
import './RelatedMoviesContainer.scss';

interface Props {
  movies: RelatedMovie[];
}

function RelatedMoviesContainer(props: Props) {
  return (
    <div className="rm-container">
      <div className="rm-title">Related videos</div>
      {props.movies.map(movie => <MovieThumbnail key={movie.id} movie={movie} />)}
    </div>
  );
}

export default RelatedMoviesContainer;
