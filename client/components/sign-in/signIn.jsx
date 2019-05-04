import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <form>
                <h1>Sign-Up</h1>
                <label>Username: </label>
                <input></input>
                <label>Password: </label>
                <input></input>
                <button type='Submit'>Sign-Up</button>
                <button onClick={this.props.toggleInfo}>Log-In</button>
            </form>
        )
    }
}

export default Signin;