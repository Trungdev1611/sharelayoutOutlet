import React from 'react';

const Post = () => {
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333333'
            }}>Simple HTML and CSS Post</h1>
            <p style={{
                margin: '10px',
                lineHeight: '1.6'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, 
                magna id congue blandit, eros velit bibendum nibh, id pellentesque 
                justo magna eu risus. Sed ac augue rutrum, varius enim in, tempor 
                risus. Nunc euismod, nibh id congue dictum, odio nisl volutpat 
                nisi, at congue quam nunc a ipsum.
            </p>
        </div>
    );
}

export default Post;