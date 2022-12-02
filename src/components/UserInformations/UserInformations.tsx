import { Author } from '../../types/movie';
import convertViewsNumber from '../../utility/convertViews';
import './UserInformations.scss';

interface Props {
  author: Author;
}

function UserInformations(props: Props) {
  return (
    <div className="user-container">
      <div className="avatar"></div>
      <div className="informations-container">
        <div className="informations-name">
          {props.author.name}
        </div>
        <div className="followers-number">
          {convertViewsNumber(props.author.followersNumber) + ' followers'}
        </div>
      </div>
      <button className="follow-button">Follow</button>
    </div>
  );
}

export default UserInformations;
