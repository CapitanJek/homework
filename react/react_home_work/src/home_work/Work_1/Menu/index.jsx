import React from 'react';

const Menu = () => {
    const name = 'Azim';
    const age = 24;
    const status = 'Student';
    return (
        <div>
            <h1>About Me</h1>
           <p>Name: {name}</p>
           <p>Age: {age}</p>
           <p>Status: {status}</p>

        </div>
    );
};

export default Menu;