import React from 'react';

const Post = props => (
<div className='post'>
    <label className='userName'>{props.photoInfo.userName}</label>
    <img className='postImage' src={props.photoInfo.imageUrl}></img>
</div>
);

export default Post;