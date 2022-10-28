import {
  Wrapper,
  Description,
  Img,
  UserName,
  UserTag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Img src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
