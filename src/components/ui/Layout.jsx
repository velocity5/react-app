import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Layout extends Component {
    render() { 
        return ( 
            <Container fluid>
                <Row style={{display:"block"}}>
                {this.props.children}
                </Row>
            </Container>  
         );
    }
}
 
export default Layout;