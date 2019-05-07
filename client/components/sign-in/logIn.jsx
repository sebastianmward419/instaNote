import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props); 
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.username !== '' && this.state.password !== '') {
            fetch('/api/log-in', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                if(response.status === 200) {
                    this.props.toggelMain(e);
                    this.props.setUser(this.state.username);
                }               
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
        return (
        <form>
            <h1>Log-In</h1>
            <label>Username: </label>
            <input onChange={this.onType.bind(this)} name='username'></input>
            <label>Password: </label>
            <input type='password' onChange={this.onType.bind(this)} name='password'></input>
            <button onClick={this.onSubmit.bind(this)} type='Submit'>Log-In</button>
            <button onClick={this.props.toggleInfo}>Sign-Up</button>
        </form>
        )
    }
}

export default Login;