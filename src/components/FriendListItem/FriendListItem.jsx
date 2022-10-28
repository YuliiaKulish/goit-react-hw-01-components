// import PropTypes from 'prop-types';
import {
  Item,
  IsOnline,
  IsOffline,
  Avatar,
  Name,
} from './FriendListItem.styled';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  return (
    <Item>
      {isOnline ? <IsOnline></IsOnline> : <IsOffline></IsOffline>}
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

// FriendListItem.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };

export default FriendListItem;
