import React, { Component, Fragment } from 'react';
import {Container, Row , Col, Button} from 'react-bootstrap'; 

class TopBanner extends Component {
  render() {
    return (
       <Fragment>
         <Container fluid={true} className='topFixedBanner p-0'>
           <div className='topBannerOverlay'>
            <Container  className='topContent'>
            <Row>
                <Col className='text-center'>
                    <h1 className='topTitle'>TWAPP SOFTWARE</h1>
                    <h4 className='topSubTitle'>Learn Professionally</h4>
                    <Button variant="primary">Load more</Button>
                </Col>
            </Row>
            </Container>
           </div>
         </Container>
       </Fragment>
    )
  }
}

export default TopBanner
