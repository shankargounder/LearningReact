import React, { Component } from 'react';
import classes from './App.css';
import Persons  from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 24},
      {id: '3', name: 'shankar', age: 26},
      {id: '2', name: 'Manu', age: 24},
      {id: '3', name: 'shankar', age: 26}
    ],
    showPerson: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[componentWillMount] rendering..')
  // }

  componentDidMount() {
    console.log('[componentDidMount] rendering..')
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
    console.log('[App.js] Render');
    let person = null;
    
    
    if(this.state.showPerson) {
      person = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      )
     
    }

    

    return (
      <div className={classes.App}>
        <button onClick={()=> {
          this.setState({ showCockpit:false});
        }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
        title={this.props.projectTitle}
        showPerson={this.state.showPerson}
        personsLength={this.state.persons.length}
        persons={this.state.persons}
        click={this.togglePersonHandler}
        /> : null }
        {person}

      </div>
    );
   // return React.createElement('div', {'className': 'App'}, React.createElement('h1',null,'Hi this react'));
  }
}

export default App;
 