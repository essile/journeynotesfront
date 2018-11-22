import React, { Component } from 'react';
import Login from '../components/Login';
import { Jumbotron } from "react-bootstrap";
import "../cssstyles/View.css";

class LoginView extends Component {
    render() {
        return (
            <div>
            <Jumbotron className="jumbo">
                <div className='title'>
                    <h1>journey</h1>
                    <h1>notes</h1>
                </div>
            </Jumbotron>
                <Login />
            </div>
        );
    }
}

export default LoginView;