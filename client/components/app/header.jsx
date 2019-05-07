import React from 'react';
import S3FileUpload from 'react-s3';
import awsKeys from '../../../awsKeys.js' 

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.config = {
            bucketName: 'oreoposts',
            region: 'us-east-1',
            accessKeyId: awsKeys.accessKeyId,
            secretAccessKey: awsKeys.accessSecretKeyId
        }
    }

    handleFile(e) {
        var file = e.target.files[0];
        var headerInstance = this;
        S3FileUpload
        .uploadFile(file, headerInstance.config)
        .then(data => {
            fetch('/api/post', {
                method: 'POST',
                body: JSON.stringify({imageUrl: data.location, currentUser: this.props.currentUser}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err)
        });
        
    }

    render() {
        return (
            <div className='headerSection'>
                <h1 className='headerSection_title'>Oreo</h1>
                <h3 className='headerSection_userInfo'>{this.props.currentUser}</h3>
                <input onChange={this.handleFile.bind(this)} className='headerSection_post' type='file'/>
            </div>
        )
    }
}

export default Header;