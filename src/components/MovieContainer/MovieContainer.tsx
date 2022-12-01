import { Movie } from '../../types/movie';
import './MovieContainer.scss';

interface Props {
  movie: Movie
}

function MovieContainer(props: Props) {
  return (
    <div className="m-container">{props.movie.name}</div>
  );
}

export default MovieContainer;
