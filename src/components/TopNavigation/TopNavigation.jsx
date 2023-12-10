import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css'; 
import whiteLogo from '../../asset/images/logo_white.png';
import blackLogo from '../../asset/images/logo_black.png';

class TopNavigation extends Component {

    constructor(){
        super();

        this.state={
            navBarTitle:'navTitle',
            navBarLogo:[whiteLogo], //object,
            navVariable:"dark",
            navBarBackground:"navBackground",
            navBarItem:"navItem"
        }
    }
    
    onScroll = () =>{
        console.log(window.scrollY);
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navBarLogo:[blackLogo],navBarBackground:"navBackgroundScroll",navBarItem:"navItemScroll",navVariable:"light"});
        } else {
            this.setState({navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBackground:"navBackground",navBarItem:"navItem",navVariable:"dark"});
        }
    }

        //componentDidMount function run for
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }
    render() {
        return (
            <Fragment>
                <Navbar collapseOnSelect fixed='top' data-bs-theme={this.state.navVariable} expand="lg" className={this.state.navBarBackground}>
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle} href="#home">
                            <img src={this.state.navBarLogo}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICE</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT US</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation