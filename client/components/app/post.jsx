import React from 'react';

const Post = props => (
<div className='post'>
    <label className='userName'>{props.photoInfo.username}</label>
    <img className='postImage' src={props.photoInfo.imageurl}></img>
</div>
);

export default Post;