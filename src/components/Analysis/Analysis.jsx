import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


class Analysis extends Component {

    constructor() {
        super();

        this.state = {
            data: [
                { Technology: 'PHP', Project: 100 },
                { Technology: 'MySqli', Project: 90 },
                { Technology: 'Laravel', Project: 80 },
                { Technology: 'ReactJS', Project: 80 },
                { Technology: 'JavaScript', Project: 100 }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceMainTitle'>TECHNOLOGY</h1>
                    <div className="bottom"></div>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" fill="#051b35"></XAxis>
                                    <Tooltip />
                                    <Bar dataKey="Project" fill="#051b35" />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className='serviceDescription'>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                                <br></br><br></br>
                                a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                                <br></br><br></br>
                                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                            </p>
                        </Col> 
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Analysis