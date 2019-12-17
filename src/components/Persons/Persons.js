import React, {PureComponent} from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[getDerivedStateFromProps] rendering..')
    //     return state;
    // }

    // componentWillReceiveProps() {
    //     console.log('[componentWillReceiveProps] rendering..')
    // }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('[shouldComponentUpdate] rendering..')
    //     if(
    //     nextProps.persons !== this.props.persons ||nextProps.changed !== this.props.changed || 
    //     nextProps.clicked !== this.propsclicked) {
    //         return true;
    //     } else {
    //         return true;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[getSnapshotBeforeUpdate] rendering..')
        return null;
    }

    componentDidUpdate() {
        console.log('[componentDidMount] rendering..')
    }

    componentWillUnmount() {
        console.log('[componentWillUnmount] rendering..')
    }

    render() {
        console.log('[persons.js] rendering..')
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event,person.id)}
                />
            );
                
        });
    }
}


export default Persons;

    
