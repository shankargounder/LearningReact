import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 24},
      {id: '3', name: 'shankar', age: 26}
    ],
    showPerson: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});

    
  }

  deletePersonHandler = (personIndex) => {
    //const person = this.state.persons;
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({persons: person});
  }

  togglePersonHandler = () => {
    const doesShow =this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }


  render() {
    // const style = {
    //   font: 'inherit',
    //   backgroundColor: 'green',
    //   color: 'white',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover' : {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let person = null;

    if(this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event)=> this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      )
      
    }

    const  classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

        <div className="App">
          <h1>Hi, I'm a React App.</h1>
          <p className={classes.join(' ')}>This is really working.</p>
          <StyleButton alt={this.state.showPerson}
            onClick={this.togglePersonHandler}>
              Toggle Persons
          </StyleButton>
          {person}
        </div>

      
      
    );
   // return React.createElement('div', {'className': 'App'}, React.createElement('h1',null,'Hi this react'));
  }
}

export default App;
 