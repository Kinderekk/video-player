import { RelatedMovie } from '../../types/movie';
import convertViewsNumber from '../../utility/convertViews';
import viewsIcon from '../../assets/views-icon.png';
import './MovieThumbnail.scss';

interface Props {
  movie: RelatedMovie;
}

function MovieThumbnail(props: Props) {
  return (
    <div key={props.movie.id} className="rm-movie">
      <div className="display">
        <div className="time">
          {props.movie.time}
        </div>
      </div>
      <div className="name">{props.movie.name}</div>
      <div className="number"><img src={viewsIcon} alt={props.movie.name} />{convertViewsNumber(props.movie.playedTimes)}</div>
    </div>
  );
}

export default MovieThumbnail;