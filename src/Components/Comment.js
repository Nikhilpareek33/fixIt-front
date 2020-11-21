import React, { useState } from 'react';

function Comment (props) {
    {console.log(props)}
    const {name,message} = props.comment;
    return(
      
    <div className="media mb-3 ">
        <img
            className="mr-3 bg-light rounded"
            width="48"
            height="48"
            src={`https://robohash.org/${name}?size=48x48`}
            alt={name}
        />

        <div className="media-body p-2 shadow-sm rounded bg-light border" style= {{width:"600px"}}>
            {/* <small className="float-right text-muted">{time}</small> */}
            <h6 className="mt-0 mb-1 text-muted">{name}</h6>
            {message}
        </div>
    </div>
    )
}

export default Comment 