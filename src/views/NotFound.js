import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import "../cssstyles/View.css";

class NotFound extends Component {
    render() {
        return (
            <div>
        <Jumbotron className="jumbo">
           
            
            <Grid>
            <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}>
                <h2>Propobly not what you were looking for...</h2>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={12}>
                <p>Please navigate back home for better luck next time</p>
                </Col>
            </Row>
          </Grid>
        </Jumbotron>
          </div>

        );
    }
}

export default NotFound;