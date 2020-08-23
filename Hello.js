import React from 'react';

const sayHello = () => {
    // return(
    //     <div className='dummy'>
    //         <h1>Hello! Ayush Gupta</h1>
    //     </div>
    // )

    return(React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,'Hello! AyushGupta')))

}

export default sayHello