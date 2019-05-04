import React from 'react';
import PostSection from './postSection.jsx';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       return (
        <div>
            <PostSection data={this.props.data}/>
        </div>
        )
    }
}

export default Main;