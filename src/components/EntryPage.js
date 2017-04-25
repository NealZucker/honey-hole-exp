import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class EntryPage extends React.Component {

  render() {
    return(
      <div className="entry-page">
        <div style={{width: "100vw", position: "relative", display:'flex', flexWrap:'wrap', justifyContent:'space-around', background:"#F9A603"}}>
          <span><h1 className="lifecoach">Life&nbsp;Coach</h1></span>
          <Login/>
        </div>
        <SignUp/>
      </div>
    );
  }
}
