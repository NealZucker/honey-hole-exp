import React from 'react';
import { Jumbotron, Button, Well, Col, Row } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import { browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import SimpleMap from './SimpleMap';

class Home extends React.Component{
  constructor(){
    super();
    this.handleSavePosition = this.handleSavePosition.bind(this);
  }

  componentDidMount() {
    // this.props.wheelStore.loadWheelsFromServer(this.props.userStore.userId);
    // this.props.goalStore.loadGoalsFromServer(this.props.userStore.userId);
  }

  handleSavePosition() {
    this.props.locationStore.savePosition(this.props.userStore.userId);
    // this.props.locationStore.getWeatherInfo();
    browserHistory.replace("/form");

  }

  render(){
    return (
      <div className="parent">
        <div className="container">
          <h1 className="welcome-header">Welcome, {this.props.userStore.firstName}! </h1>
          <Col md={2}/>
          <Col md={8}>
            <div style={{position:'absolute', width:'100%', height:'300px'}}>
              <SimpleMap />
                <Button bsStyle="danger" bsSize="large" block style={{marginTop: "20px"}} onClick={this.handleSavePosition}>
                Save the Honey</Button>

            </div>
          </Col>
          <Col md={2}/>
        </div>
      </div>
    );
  }
}
Home.propTypes={
  userStore: React.PropTypes.object,
  locationStore: React.PropTypes.object
};

export default inject('userStore', 'locationStore')(observer(Home));
