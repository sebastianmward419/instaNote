import React from 'react';
//components
import PostSection from './postSection.jsx';
import Header from './header.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
        <div>
            <Header currentUser={this.props.currentUser}/>
            <PostSection data={this.props.data}/>
        </div>
        )
    }
}

export default Main;