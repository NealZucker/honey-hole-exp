import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Form from './components/Form';
import { Provider } from 'mobx-react';
import UserStore from './stores/UserStore';
import LocationStore from './stores/LocationStore';
import GoalStore from './stores/GoalStore';
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';
import EntryPage from './components/EntryPage';
const locationStore = new LocationStore();
const userStore = new UserStore();
const goalStore = new GoalStore();

export default function indexRoute(){
  return(
    <Provider userStore={userStore} locationStore={locationStore}>
      <Router history={browserHistory}>
      <Route path="/" component={EntryPage}/>
        <Route component={EnsureLoggedInContainer}>
          <Route path="/home" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/form" component={Form}/>
            <Route path="/history" component={History}/>
          </Route>
        </Route>
        <Route path="*" component={EntryPage}/>
      </Router>
    </Provider>
  );
}
