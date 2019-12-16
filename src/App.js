import React, { Component } from 'react';
import classes from './App.css';
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
    let person = null;
    let btnClass = [classes.Button];

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
      btnClass.push(classes.Red)
    }

    const  assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (

        <div className={classes.App}>
          <h1>Hi, I'm a React App.</h1>
          <p className={assignedClasses.join(' ')}>This is really working.</p>
          <button className={btnClass.join(' ')}
            onClick={this.togglePersonHandler}>
              Toggle Persons
          </button>
          {person}
        </div>

      
      
    );
   // return React.createElement('div', {'className': 'App'}, React.createElement('h1',null,'Hi this react'));
  }
}

export default App;
 