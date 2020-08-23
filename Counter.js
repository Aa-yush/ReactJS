import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    increment(){
        // this.state.count = this.state.count + 1  Cannot modify state directly 
        // console.log(this.state.count);           It increment perfectly
        this.setState({                             // Now perfecly works
            count : this.state.count + 1            //  using current state for increment
        },()=>{console.log('CallBack value :: '+this.state.count)})   // using call back which is arrow function
        console.log(this.state.count);          // It always rendered value less than 1 
    }

     incOne(){                              
       this.setState(prevState=>({              //using previous state for increment
           count : prevState.count + 1
       }))
    }

    incFive(){
        this.incOne();                          
        this.incOne();
        this.incOne();
        this.incOne();
        this.incOne();                      // React asssuming only single function call if we use current state for increment
    }
    

    render() {
        return (
            <div>
                count :  {this.state.count}
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incFive()}>Increment By Five</button>
                
            </div>
        )
    }
}

export default Counter
