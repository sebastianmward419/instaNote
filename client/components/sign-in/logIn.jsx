import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props); 
    }
    

    render() {
        return (
        <form>
            <h1>Log-In</h1>
            <label>Username: </label>
            <input></input>
            <label>Password: </label>
            <input></input>
            <button type='Submit'>Log-In</button>
            <button onClick={this.props.toggleInfo}>Sign-Up</button>
        </form>
        )
    }
}

export default Login;