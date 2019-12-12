import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 24},
      {name: 'shankar', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    console.log("Was clicked");
    this.setState({ persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 24},
        {name: 'shankar', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 24},
        {name: 'shankar', age: 27}
      ]
    })
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is working.</p>
        <button style={style} onClick={this.switchNameHandler.bind(this, 'Maximillan')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My Hobbies!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
      
    );
   // return React.createElement('div', {'className': 'App'}, React.createElement('h1',null,'Hi this react'));
  }
}

export default App;
 