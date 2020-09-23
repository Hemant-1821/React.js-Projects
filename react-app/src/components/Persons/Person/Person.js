import React,{ Component } from 'react';
 
import Aux from '../../../HOC/Auxiliary';
import classes from './Person.css';

class Person extends Component{
    render() {
        console.log('[Person.js] rendering...');
        return(
        <Aux>
            <p onClick={this.props.click}>I'm a {this.props.name} and my age is {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        )
    }
}

export default Person;