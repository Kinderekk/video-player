import { Movie } from '../../types/movie';
import convertViewsNumber from '../../utility/convertViews';
import NumbersView from '../NumbersView/NumbersView';
import viewsIcon from '../../assets/views-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import commentIcon from '../../assets/comment-icon.png';
import Moment from 'moment';
import './MovieContainer.scss';
import UserInformations from '../UserInformations/UserInformations';
import ProgressBar from '../ProgressBar/ProgressBar';
import ViewsIcon from '../../assets/views-icon.png';
import VolumeIcon from '../../assets/volume-icon.png';
import FullsizeIcon from '../../assets/fullscreen-icon.png';
import HeartIcon from '../../assets/love-icon.png';
import ShareIcon from '../../assets/share-icon.png';

interface Props {
  movie: Movie
}

function MovieContainer(props: Props) {
  return (
    <div className="m-container">
      <div className="m-display">
        <div className="heart-icon">
          <img src={HeartIcon} alt="" width="20" height="20" />
        </div>
        <div className="share-icon">
          <img src={ShareIcon} alt="" width="20" height="20" />
        </div>
        <div className="bottom-features">
          <div className="play-button">
            <div className='play-button-background'>
              <img className="play-button-icon" src={ViewsIcon} alt="" width="12" height="12" />
            </div>
          </div>
          <div className="playtime">
            <ProgressBar percentage={55} />
            <div className="time">
              0:24 / {props.movie.time}
            </div>
          </div>
          <div className="sound">
            <img className="sound-icon" src={VolumeIcon} alt="" width="14" height="14" />
            <ProgressBar percentage={75} />
          </div>
          <div className="quality">
            720
          </div>
          <div className="fullsize-icon">
            <img src={FullsizeIcon} alt="" width="16" height="14" />
          </div>
        </div>
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
          <UserInformations author={props.movie.author} />
        </div>
        <div className="m-uploaded">
          <div className="m-uploaded-title">
            Uploaded:
          </div>
          <div className="m-uploaded-date">
            {Moment(props.movie.uploadDate).format('D MMMM, YYYY')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieContainer;
