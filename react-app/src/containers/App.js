import React, { Component } from 'react';
import classes from'./App.css';  
import Person from '../components/Persons/Person/Person'

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
    let BtnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                      click={this.deletePersonHandler.bind(this, index)}
                      name={person.name} 
                      age={person.age}
                      key={person.id}
                      changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
          })}
          </div>
      )

      BtnClass = classes.Red;
    }

    var assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); 
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); 
    }

    return (
      <div className={ classes.App }>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={BtnClass}
          onClick={this.togglePersonsHandler}>Toggle persons
        </button>
        {persons}          
      </div>
    );
  }
}

export default App;
