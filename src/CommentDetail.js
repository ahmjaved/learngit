import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    const butthontext='clcik me';
    function getTime(){
        return (new Date()).toLocaleTimeString()
    }
    return (

        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                    </a>

                    <div className="content">
                    <a href="/" className="author">
                        <img alt="avatar" />
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:00PM</span> </div>
                    <div>
                    <div className="text">Nice blog post!</div>
                        <label>Enter name</label>
                        <input id="name" type="text"  />
                        <button style={{backgroundColor:'blue', color: 'white'}}>
                        {butthontext}
                        {getTime()}
                         </button>
                    </div>
                </div>
            </div>
    );


};

export default CommentDetail;