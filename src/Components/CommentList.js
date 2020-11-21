import React from 'react'
import Comment from './Comment'

function CommentList (props){
    
    return( 
         
        <div className="ml-4 mt-3">
           
            <h5 className="text-muted mb-4">
                {console.log(props)}
            <span className="badge badge-success mr-2"> {props.comments.length} </span> {" "}
            Comment{props.comments.length <= 1? "": "s"}
            </h5>

            {props.comments.length === 0 && !props.loading ?(
                <div> 
                    Be the first one to comment 
                </div>
            ): null }

            {props.comments.map((comment,index) =>(
                
                <Comment key={index} comment={comment} />
             ) )}
        </div>
    )
}

export default CommentList
