import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import ecommerceIcon from '../../asset/images/ecommerce.png';
import designIcon from '../../asset/images/design.png';
import webIcon from '../../asset/images/web.png';

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className='ecommerceIcon' src={ecommerceIcon} />
                <h4 className="serviceName">Ecommerce</h4>
                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className='designIcon' src={designIcon} />
                <h4 className="serviceName">Design</h4>
                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className='webIcon' src={webIcon} />
                <h4 className="serviceName">Web Icon</h4>
                <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Services
