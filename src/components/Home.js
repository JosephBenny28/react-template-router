import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Career from './Career';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        <>
            <div className='text-center' id='home' >
                <Container className='home'>
                    <Row>
                        <Col className='content'>
                            <h1>
                                Welcome to Home Page
                            </h1>
                        </Col>

                    </Row>
                </Container>
            </div>

            <Career />
            <About />
            <Contact />

        </>
    )
}

export default Home