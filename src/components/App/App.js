import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        city: ''
      }
    };
    // makes 'this' in handleChange the same as 'this' here in the constructor
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleCityChange = this.handleCityChange.bind(this);
    // code above no longer needed due to currying
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    console.log(event.target.value);
    // this.state.user = event.target.value;
    this.setState({
      user: {
        // city: this.state.user.city,
        ...this.state.user,
        name: event.target.value,
      }
    });
  }

  handleCityChange(event) {
    console.log(event.target.value);
    // this.state.user = event.target.value;
    this.setState({
      user: {
        // name: this.state.user.name,
        ...this.state.user,
        city: event.target.value,
      }
    });
  }

  // CURRYING  ->  returns another function
  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        user: {
          ...this.state.user,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  // CURRYING  ->  simpler; same result as above
  // handleChangeFor = propertyName => event => {
  //     this.setState({
  //       user: {
  //         ...this.state.user,
  //         [propertyName]: event.target.value,
  //       }
  //     });
  // }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.user);
    this.setState({
      user: {
        name: '',
        city: '',
      }
    })
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Instructions />

        <form onSubmit={ this.handleSubmit }>
          <input value={ this.state.user.name } onChange={ this.handleChangeFor('name') } />
          <input value={ this.state.user.city } onChange={ this.handleChangeFor('city') } />
          <input type='submit' value='Submit' />
        </form>
        <p>
          { this.state.user.name } is from { this.state.user.city }
        </p>

      </div>
    );
  }
}

export default App;
