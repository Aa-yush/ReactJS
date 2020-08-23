import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import SayHello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
     
      {/* <Greet />
      <Welcome /> */}

     {/* <SayHello /> */}

     {/* <Greet name='Ayush Gupta' course='MCA'>
       <p>This is Ayush Gupta Children </p>      
      </Greet>
     <Greet name='Saurabh Sharma' course='BCA'>
       <button>saurabh</button>
     </Greet>
     <Greet name='Reeena Goel' course='BTech'></Greet> 

     <Welcome name='Ayush Gupta' course='MCA'>
     <p>This is Ayush Gupta Children </p> 
     </Welcome>
     <Welcome name='Saurabh Sharma' course='BCA'>
     <button>saurabh</button>
     </Welcome>
     <Welcome name='Reeena Goel' course='BTech'></Welcome> */}

     <Message />

    </div>
  );
}

export default App;
