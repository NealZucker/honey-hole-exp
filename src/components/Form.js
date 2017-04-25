import React from 'react';
import { inject, observer } from 'mobx-react';
import { FormControl, ControlLabel, FormGroup, Button } from 'react-bootstrap';
import dateFormat from 'dateformat';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      notes: '',
      temp: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTempChange = this.handleTempChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleSaveNotes = this.handleSaveNotes.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
    console.log(this.state.title);
  }

  handleTempChange(e) {
    this.setState({temp: e.target.value});
    console.log(this.state.temp);
  }

  handleNotesChange(e) {
    this.setState({notes: e.target.value});
    console.log(this.state.notes);
  }

  handleSaveNotes(){
    this.props.locationStore.saveNotes();

  }

  render(){
    return(
      <div className="parent">
        <div className="container">
          <h1 className="welcome-header">Fill out your Honey Hole Info!</h1>
          <h2>Date: {dateFormat(this.props.locationStore.location.date,
                       "dddd, mmmm dS, yyyy, h:MM TT")}</h2>
          <h2>Latitude: {this.props.locationStore.center.lat}</h2>
          <h2>Longitude: {this.props.locationStore.center.lng}</h2>
          <h3>Weather Conditions: {this.props.locationStore.weather.conditions}</h3>
          <h3>Temperature: {Math.floor((this.props.locationStore.weather.temp)* (9/5) - 459.67)} degrees</h3>
          <h3>Wind: {Math.floor((this.props.locationStore.weather.windSpeed) * 2.2369)} mph, {this.props.locationStore.weather.windDir} degrees</h3>
          <form>
            <h2>Field Notes </h2>

            <FormGroup controlId="formBasicText">
              <ControlLabel>Title</ControlLabel>
              <FormControl
              type="text"
              onChange={this.handleTitleChange}
              value={this.state.title}
              placeholder="Enter title"
              />
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Notes</ControlLabel>
              <FormControl componentClass="textarea" onChange={this.handleNotesChange} placeholder="My notes.." />
            </FormGroup>

          </form>
          <Button bsStyle="danger" bsSize="large" block style={{marginTop: "20px"}} onClick={this.handleSaveNotes}>
          Save Your Notes</Button>

        </div>
      </div>
    );
  }
}

Form.propTypes = {
  locationStore: React.PropTypes.object
};

export default inject('locationStore')(observer(Form));
