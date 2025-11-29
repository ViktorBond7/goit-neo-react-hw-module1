import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.container}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

// const FriendList = ({ friends }) => {
//   return (
//     <ul>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <li key={id}>
//           <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FriendList;
