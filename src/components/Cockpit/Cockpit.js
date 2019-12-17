import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) =>{
    useEffect(()=> {
        console.log('useEffect');
        //http request also sent here
        setTimeout(() => {
            alert('Saved data to cloud')
        },1000)
        return () => {
            console.log('[cockpit.js] cleanup work in useEffect')
        }
    },[props.persons]) //if persons array will update than only setTimeout function will call
//},[]) it will cal only one time empty array

    useEffect(() => {
        console.log('[cockpit.js] 2nd cleanup work in useEffect')
        return () => {
            console.log('[cockpit.js] cleanup work in useEffect')
        }
    })

    const  assignedClasses = [];
    let btnClass = '';
    if(props.showPerson) {
        btnClass=classes.Red
    }
    
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working.</p>
            <button
                className={btnClass}
                onClick={props.click}>
                Toggle Persons
            </button>
        </div>
    );
}

export default React.memo(cockpit);