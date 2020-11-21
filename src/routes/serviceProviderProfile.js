import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import logo from './img_avatar.png'
import '../css/serviceProviderProfile.css'
import {RiTimeFill} from 'react-icons/ri'
import {GoKey, GoTools} from 'react-icons/go'
import {HiLocationMarker} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import CommentList from '../Components/CommentList.js'
import Button from 'react-bootstrap/Button'

// for making icons inline with text
const inline = {  marginBottom:"8px" }

let c=1;

function ServiceProviderProfile (props){


    const [comments ,updateCommentsList ] = useState([{
           name : "Nikhi",
           message: 'lorem ipsumas;dlkfjasldkjf ;laskdjf;lasjd l;fa s;dljfa;ls fla skdjf ;alskdj f;la sd;lfjas;ldk fja;sld las jf;kasdj;lasjd;lfajs;l;flaksjdflajsdlfja;lsd'
           
    }])
    const [loading ,updateLoading] = useState(false)
  
    
    return(
        <div className='service-provider-profile-page'> 

            <Row className='service-provider-profile-body'>

                <Col sm={4} className="service-provider-profile-details">
                    <Row>
                        <Image src={logo} className="service-provider-profile-image pt-3" roundedCircle/>
                    </Row>

                    <div className='pl-4 mt-5'> 
                    <Row className="service-provider-profile-name">
                        Nikhil Pareek
                    </Row>
                    <Row className="service-provider-profile-location mt-3">
                        <span><HiLocationMarker style={inline} /></span>
                        <span className='ml-3' > Ajmer, Rajasthan </span>
                    </Row>
                    <Row className='service-provider-profile-service'>
                        <span> <GoTools style={inline}/> </span>
                        <span className='ml-3' >Engineer</span>
                    </Row>
                    <Row className='service-provider-profile-experience'>
                        <span><RiTimeFill style={inline}/></span>
                        <span className='ml-3'> Experience : 2 yrs  </span>
                    </Row>
                    <Row className='service-provider-profile-password'>  
                    <span> <GoKey style={inline}/> </span> nikhil1234
                    </Row>
                    <Row className='service-provider-profile-email'>
                    <span> <MdEmail style={inline}/> </span> nikhilpareek33@gmail.com
                    </Row>
                    <Row className='service-provider-profile-mobile'>
                    <span> <GoTools style={inline}/> </span>6476480117
                    </Row>
                    </div>
                </Col>

                <Col className='service-provider-profile-comment ml-2'>
                    <Row> 
                      
                       <CommentList comments = {comments} loading = {loading} />
                    </Row>
                </Col>
            </Row>
        </div>

    )
}

export default ServiceProviderProfile 