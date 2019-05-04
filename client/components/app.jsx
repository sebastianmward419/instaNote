import React from 'react';
//components
import LogIn from './sign-in/logIn.jsx';
import SignIn from './sign-in/signIn.jsx';
import Main from './app/main.jsx';
import Header from './app/header.jsx';
//data
import mockData from '../mockData/data.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'main',
            infoMode: 'log',
            data : mockData
        }
    }

    toggleInfoMode(e) {
        e.preventDefault();
        var toggled = this.state.infoMode === 'log' ?
        'sign' : 'log';
        this.setState({
            infoMode: toggled
        })
    }



    render() {
        var mode;
        var currentMode = this.state.mode;
        if(currentMode === 'info') {
           if(this.state.infoMode === 'log') {
            mode = <LogIn toggleInfo={this.toggleInfoMode.bind(this)}/>;
           } else {
            mode = <SignIn toggleInfo={this.toggleInfoMode.bind(this)}/>
           }            
        } else if(currentMode === 'main') {
            mode = <Main data={this.state.data}/>;
        }
        return (
            <div>
              {mode}  
            </div>
        )
    }
}

export default App;