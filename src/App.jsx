import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      {Object.keys(userData).length !== 0 && (
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      )}
      {friends.length > 0 && <FriendList friends={friends} />}
      {transactions.length > 0 && <TransactionHistory items={transactions} />}
    </>
  );
};

export default App;
