import FriendListItem from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </List>
  );
}

export default FriendList;
