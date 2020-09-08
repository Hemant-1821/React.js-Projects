import React, { Component } from 'react';
import classes from'./App.css';  
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'fjdn1', name: 'Hemant', age: 28 },
      { id: 'nbjf2', name: 'Singh', age:29 },
      { id: 'yrti3', name:'Ujjwal', age:30 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons}); 
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow}); 
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons =
          <Persons clicked={this.deletePersonHandler} 
                   persons={this.state.persons}
                   changed={this.nameChangedHandler}
          />
    }

    return (
      <div className={ classes.App }>
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />          
        {persons}
      </div>
    );
  }
}

export default App;
