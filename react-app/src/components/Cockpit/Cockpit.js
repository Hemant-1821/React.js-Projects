import React, {useEffect} from 'react';
import classes from'./Cockpit.css';  

const cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(()=> {
        alert('useEffect triggered');
      },1000);
    }, [props.persons]);

    var assignedClasses = [];
    let BtnClass = '';
    if(props.showPersons)
    {
        BtnClass = classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red); 
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold); 
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            className={BtnClass}
            onClick={props.clicked}>Toggle persons
            </button>
        </div>
    );
}; 

export default cockpit;