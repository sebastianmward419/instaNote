import React from 'react';
//components
import LogIn from './sign-in/logIn.jsx';
import SignIn from './sign-in/signIn.jsx';
import Main from './app/main.jsx';
//data
import mockData from '../mockData/data.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'info',
            infoMode: 'log',
            data: mockData,
            user: '',
            minutes: 0
        }
    }

    componentDidMount() {
        this.getData();
        this.interval = setInterval(() => {
        this.getData();
        this.setState({ minutes: this.state.minutes++ })
        }
        , 60000); 
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    getData() {
        var appThis = this;
        
        fetch('/api/posts')
        .then(response => {
            return response.json();
        })
        .then(result => {
            appThis.setState({
                data: result
            });
        });
    }

    toggleInfoMode(e) {
        e.preventDefault();
        var toggled = this.state.infoMode === 'log' ?
        'sign' : 'log';
        this.setState({
            infoMode: toggled
        })
    }

    setUser(user) {
        this.setState({
            user: user
        });
    }

    bringToApp(e) {
        e.preventDefault();
        this.setState({
            mode: 'main'
        });
    }



    render() {
        var mode;
        var currentMode = this.state.mode;
        if(currentMode === 'info') {
           if(this.state.infoMode === 'log') {
            mode = <LogIn setUser={this.setUser.bind(this)} toggelMain={this.bringToApp.bind(this)} toggleInfo={this.toggleInfoMode.bind(this)}/>;
           } else {
            mode = <SignIn setUser={this.setUser.bind(this)} toggelMain={this.bringToApp.bind(this)} toggleInfo={this.toggleInfoMode.bind(this)}/>
           }            
        } else if(currentMode === 'main') {
            mode = <Main currentUser={this.state.user} data={this.state.data}/>;
        }
        return (
            <div>
              {mode}  
            </div>
        )
    }
}

export default App;