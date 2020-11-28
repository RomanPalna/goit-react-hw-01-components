//Profile (task-1)
import Profile from './components/Profile/Profile';
import profile from './user.json';

//Statistic data (task-2)
import Statistics from './components/Stats/StatList';
import statisticalData from './statistical-data.json';

//FriendsList (task-3)
import FriendsList from './components/Friends/FriendsList';
import friends from './friends.json';

//Transactions (task-4)
import TransactionsList from './components/Transactions/TransactionsList';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      ;
      <Statistics title="Upload stats" items={statisticalData} />;
      <FriendsList items={friends} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}
