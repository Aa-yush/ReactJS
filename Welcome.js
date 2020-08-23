import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // return <h1>Welcome, class Component</h1>

        return (
            <div>
                <h2>Name is : {this.props.name} and Course is : {this.props.course}</h2>
                {this.props.children}
            </div>

        )
    }
}

export default Welcome