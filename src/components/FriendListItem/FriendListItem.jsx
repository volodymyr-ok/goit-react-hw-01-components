import { Item, Image, Sign } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <Sign mode={`${isOnline.toString()}`}></Sign>
      <Image src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
}

export default FriendListItem;
