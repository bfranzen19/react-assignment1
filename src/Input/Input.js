import React from 'react';
import './Input.css';

const userInput = (props) => {
    return <input
        type="text"
        onChange={props.changed} 
        value={props.currentName}/>
};
export default userInput;
