import { RelatedMovie } from '../../types/movie';
import convertViewsNumber from '../../utility/convertViews';
import viewsIcon from '../../assets/views-icon.png';
import './MovieThumbnail.scss';
import NumbersView from '../NumbersView/NumbersView';

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
      <NumbersView icon={viewsIcon} number={convertViewsNumber(props.movie.playedTimes)} iconWidth="7" iconHeight="12" />
    </div>
  );
}

export default MovieThumbnail;