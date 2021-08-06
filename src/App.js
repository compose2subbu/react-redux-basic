import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import UserProfile from './components/UserProfile'

function App() {

  const auth = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      {auth && <Header /> }
      {!auth && <Auth />}
      {auth && <UserProfile />}
      
      <Counter />
    </Fragment>
  );
}

export default App;
