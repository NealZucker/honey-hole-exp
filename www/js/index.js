import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'mobx-react';
import UserStore from '../../src/stores/UserStore';
import LocationStore from '../../src/stores/LocationStore';
import GoalStore from '../../src/stores/GoalStore';
import EntryPage from '../../src/components/EntryPage';
const locationStore = new LocationStore();
const userStore = new UserStore();
const goalStore = new GoalStore();
import EnsureLoggedInContainer from '../../src/components/EnsureLoggedInContainer';
import App from '../../src/components/App';
import Home from '../../src/components/Home';
import Form from '../../src/components/Form';


let app = {
    // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
  onDeviceReady: function() {
    ReactDOM.render((
      <Provider userStore={userStore} locationStore={locationStore}>
        <Router history={browserHistory}>
        <Route path="*" component={EntryPage}/>
        <Route path="/" component={EntryPage}/>
        <Route component={EnsureLoggedInContainer}>
          <Route path="/home" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/form" component={Form}/>
            <Route path="/history" component={History}/>
          </Route>
        </Route>


        </Router>
      </Provider>
    ), document.getElementById('app'));
  },

};

app.initialize();
