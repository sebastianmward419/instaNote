import React from 'react';
import S3FileUpload from 'react-s3';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFile(e) {
        console.log(e.target.files[0]);
        
    }

    render() {
        return (
            <div className='headerSection'>
                <h1 className='headerSection_title'>Oreo</h1>
                <input onChange={this.handleFile} className='headerSection_post' type='file'/>
            </div>
        )
    }
}

export default Header;