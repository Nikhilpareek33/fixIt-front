/* eslint-disable react/jsx-pascal-case */
//React imports

import React from 'react'
import universalCookies from 'universal-cookie'

//bootstrap&css 
import '../css/navbar.css'
import logo from '../images/fix-it_logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

//Router & Redux
import {withRouter,Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Control, LocalForm, Errors } from 'react-redux-form'

//Custom imports
import { verifyLogin, tryLogin,validateToken, logout } from '../redux/actionCreators/login.js'
import * as validators from '../redux/validators.js'


const mapStateToProps = (state) => {
    return { 
        favorite: state.favorite,
        request: state.request,
        login: state.login
    }
}

const mapDispatchToProps = (dispatch) => ({
    verifyLogin: (user_details) => dispatch(verifyLogin(user_details)),
    tryLogin: () => dispatch(tryLogin()),
    logout: () => dispatch(logout()),
    validateToken: ()=> dispatch(validateToken())
});

const errorStyle = {
    marginLeft: "1rem",
    fontSize: "12px",
    color: "red"
}

function NavbarComponent(props) {

    const menu = props.login.status ? ['Home', 'Browse', 'Requests', 'Chat'] :['Home', 'Browse', 'About'];
    const cookies = new universalCookies()

    if(cookies.get('token') && !props.login.status){
        props.validateToken()
    }
    return (
        <Navbar collapseOnSelect expand="lg">
            <Link to="/" className="navbar-brand">
                <img 
                    src={logo}
                    alt="fix-it logo"
                    className="navbar-logo"
                />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                <Nav className="mx-auto">
                    {
                        menu.map(item => <Link to={`/${item.toLocaleLowerCase()}`} className="navbar-link" key={item}>{item}</Link>)
                    }
                </Nav>
                <Nav>
                    <Link to='/' className="navbar-link">Help</Link>
                    {props.login.status ?
                        <Button onClick={() => props.logout()} variant="dark border-radius-20" >logout</Button>
                        : <Button onClick={() => props.tryLogin()} variant="info border-radius-20" >login</Button>
                    }
                </Nav>
            </Navbar.Collapse>
            <MyVerticallyCenteredModal show={props.login.try} err={props.login.err} login={(val) => props.verifyLogin(val)} onHide={() => { props.logout() }} />
        </Navbar>
    );
}


function MyVerticallyCenteredModal(props) {

    function handleSubmit(values) {
        props.login(values);
    }
    return (
        <Modal
            {...props}
            dialogClassName=""
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="d-flex justify-content-center" closeButton>
                <span className="h3 mr-0 ml-auto">Login</span>
            </Modal.Header>
            <LocalForm className="mt-3 px-3" onSubmit={(values) => handleSubmit(values)}>
                <Modal.Body>
                    <Row className="form-group mx-1">
                        <Form.Label className="font-italic font-weight-light">Email</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Control.text
                                model=".user_email"
                                placeholder="pranav07092k@gmail.com"
                                className="form-control"
                                validators={{
                                    isEmail: validators.isEmail
                                }}
                            />
                        </InputGroup>
                        <Errors
                            style={errorStyle}
                            model=".user_email"
                            show="touched"
                            messages={{
                                isEmail: "*Valid e-mail required!"
                            }}
                        />
                    </Row>
                    <Row className="form-group mx-1">
                        <Form.Label className="font-italic font-weight-light">Password</Form.Label>
                        <Control.text
                            model=".user_password"
                            type="password"
                            placeholder="********"
                            className="form-control"
                            validators={{
                                minLength: validators.minLength(8),
                                maxLength: validators.maxLength(108)
                            }}
                        />
                        <Errors
                            style={errorStyle}
                            model=".user_password"
                            show="touched"
                            messages={{
                                minLength: "* Must contain atleast 8 characters",
                                maxLength: "* Must contain atmax 108 characters"
                            }}
                        />
                    </Row>
                    {
                        props.err? 
                            <Alert variant="danger">
                                {props.err}
                            </Alert>:<></>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button className="mx-auto" type="Submit" variant="info">Log In</Button>
                </Modal.Footer>
            </LocalForm>
        </Modal>
    );
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavbarComponent));