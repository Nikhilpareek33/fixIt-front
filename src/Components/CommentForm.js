import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import CommentList from "./CommentList.js";

function CommentForm (props) {
    return(
        <div> 
            <div className='mt-4 mb-3'>
                <div className=''><strong>Comments</strong></div>
                <div className=''>
                    <textarea name='comment' className='form-control' placeholder='Add a new comment'>

                    </textarea>
                </div>
                <div>
                <Button>Add</Button>
                </div>
            </div>

            <div>
                <CommentList/>
            </div>
           
        </div>
    )

}
export default CommentForm