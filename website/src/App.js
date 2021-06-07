import { Route, Switch } from 'react-router-dom';
import FriendsPage from './pages/friends/index';
import ProfilePage from './pages/profile/index';
import HomePage from './pages/home/index';

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
