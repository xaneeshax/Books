import React, { useState } from 'react'

const UseStatBasics = () => {
    const [text, setText] = useState('random title');

    const handleClick = () => {
        if (text === 'random title') {
            setText('hello world');
        } else {
            setText('random title');
        }
    };

    return (
        <React.Fragment>
            <h1>{text}</h1>
            <button className='btn' onClick={handleClick}>
                change title
            </button>
        </React.Fragment>
    );

    
};

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                )
            })}
            <button className='btn' onClick={() => setPeople([])}>
                clear items
            </button>
        </>
    )

}

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 24,
        message: 'random message'
    });
    
    const changeMessage = () => {
        setPerson({...person, message: 'hellooo' });
    };

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.name}</h3>
            <h3>{person.name}</h3>
            <button className='btn' onClick={changeMessage}>
                change message
            </button>
        </>
    )
}

export default States;

