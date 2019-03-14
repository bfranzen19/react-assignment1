import React from 'react';
import './Output.css';

const userOutput = (props) => {
    return (
        <div>
            <p>username: {props.userName}</p>
            <p></p>
        </div>
    );
};
export default userOutput;
