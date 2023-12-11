import React from 'react';


const Props = ({color, background, size}) => {


        return (
        <div>
           <div style={{color: color, background: background, fontSize: size}}>Hello world</div>
           <div style={{color: color, background: background, fontSize: size}}>I'm a student</div>
        </div>
    );
};

export default Props;

