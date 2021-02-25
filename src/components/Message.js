import React, { forwardRef } from 'react';


const Message = forwardRef((props , ref)=> {

    const isuser=props.username === props.message.username;


    
    return (
        <div className={`message ${isuser&& "user-message" }`} ref={ref}>
       {!isuser &&  <span> {props.message.username} </span>}
        <p> {props.message.text}</p>  
        </div>
    )
})

export default Message;

