import { List } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, ...rest }) => (
        <FriendListItem key={id} {...rest} />
      ))}
    </List>
  );
};

export default FriendList;
