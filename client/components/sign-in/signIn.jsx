import React from 'react';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.username !== '' && this.state.password !== '') {
            fetch('/api/sign-up', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                this.props.toggelMain(e);
                this.props.setUser(this.state.username);
            })
        }
    }

    onType(e) {
        var typeName = e.target.name;
        var value = e.target.value;

        this.setState({
            [typeName]: value
        })
    }

    render() {
        return(
            <form>
                <h1>Sign-Up</h1>
                <label>Username: </label>
                <input onChange={this.onType.bind(this)} name='username'></input>
                <label>Password: </label>
                <input type='password' onChange={this.onType.bind(this)} name='password'></input>
                <button onClick={this.onSubmit.bind(this)} type='Submit'>Sign-Up</button>
                <button onClick={this.props.toggleInfo}>Log-In</button>
            </form>
        )
    }
}

export default Signin;