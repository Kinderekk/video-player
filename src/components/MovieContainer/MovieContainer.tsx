import { Movie } from '../../types/movie';
import convertViewsNumber from '../../utility/convertViews';
import NumbersView from '../NumbersView/NumbersView';
import viewsIcon from '../../assets/views-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import commentIcon from '../../assets/comment-icon.png';
import './MovieContainer.scss';

interface Props {
  movie: Movie
}

function MovieContainer(props: Props) {
  return (
    <div className="m-container">
      <div className="m-display">
        display
      </div>
      <div className="m-informations-container">
        <div className="m-name">
          {props.movie.name}
        </div>
        <div className="m-description">
          {props.movie.description}
        </div>
        <div className="m-movie-informations">
          <div className="m-number">
            <NumbersView icon={viewsIcon} number={convertViewsNumber(props.movie.playedTimes)} iconWidth="7" iconHeight="12" />
          </div>
          <div className="m-likes">
            <NumbersView icon={heartIcon} number={convertViewsNumber(props.movie.likes)} />
          </div>
          <div className="m-comments">
            <NumbersView icon={commentIcon} number={convertViewsNumber(props.movie.numberOfComments)} />
          </div>
        </div>
      </div>
      <div className="m-user-informations">
        <div className="m-user">
          user
        </div>
        <div className="m-uploaded">
          uploaded
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
