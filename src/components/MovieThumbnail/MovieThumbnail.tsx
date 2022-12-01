import { RelatedMovie } from '../../types/movie';
import './MovieThumbnail.scss';

interface Props {
  movie: RelatedMovie;
}

function MovieThumbnail(props: Props) {
  return (
    <div key={props.movie.id} className="rm-movie">
      <div className="display">x</div>
      <div className="name">{props.movie.name}</div>
      <div className="number">{props.movie.playedTimes}</div>
    </div>
  );
}

export default MovieThumbnail;