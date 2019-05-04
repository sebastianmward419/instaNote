import React from 'react'
import Post from './post.jsx';


const PostSection = props => (
    
    <div>
        {/* <img className='postImage' src='https://s3.amazonaws.com/oreoposts/20190504_133429.jpg'></img> */}
        {
            props.data.map(photo => (
                <Post photoInfo={photo}/>
            ))
        }
    </div>
    
)

export default PostSection;