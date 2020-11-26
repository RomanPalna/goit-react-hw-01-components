//Profile (task-1)
import Profile from './components/Profile/Profile';
import profile from './user.json';
//Statistic data (task-2)
import StatsList from './components/Stats/StatList';
import statistic from './statistical-data.json';

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
      ,
      <StatsList items={statistic} />;
    </div>
  );
}
