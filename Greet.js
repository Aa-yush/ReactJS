import React from 'react';

// function Greet(){
//     return <h1>Hello!! Ayush Gupta</h1>
// }

// const Greet = () => <h1>Hello, Ayush Gupta</h1>  // Use Arrow function in ES6 javaScript

const Greet = (props) => {
    return (
        <div>
            <h1>Name is : {props.name} and Course is : {props.course}</h1>
            {props.children}
        </div>
    )
}

export default Greet