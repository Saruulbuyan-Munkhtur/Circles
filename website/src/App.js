import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/index';
import FriendsPage from './pages/friends/index';
import ProfilePage from './pages/profile/index';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/friends" component={FriendsPage}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </main>
  );
}

export default App;
