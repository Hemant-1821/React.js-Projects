import React, { Component } from 'react';
import classes from'./App.css';  
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';

class App extends Component {
  constructor(props){
    super();
    console.log('[App.js] Constructor');
  }

  state = {
    persons: [
      { id: 'fjdn1', name: 'Hemant', age: 28 },
      { id: 'nbjf2', name: 'Singh', age:29 },
      { id: 'yrti3', name:'Ujjwal', age:30 },
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state)
  {
    console.log('[App.js] getDerviedStateFromProps');
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  // componentDidUpdate() {
  //   console.log('[App.js] componentDidUpdate');
  // }

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
    console.log('[App.js] render');
    let persons = null;

    if ( this.state.showPersons ) {
      persons =
          <Persons clicked={this.deletePersonHandler} 
                   persons={this.state.persons}
                   changed={this.nameChangedHandler}
          />
    }

    return (
      <WithClass classes={ classes.App }>
        <Cockpit
          title={this.props.appTitle}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />          
        {persons}
      </WithClass>
    );
  }
}

export default App;
