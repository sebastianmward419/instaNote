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
            <Header />
            <PostSection data={this.props.data}/>
        </div>
        )
    }
}

export default Main;