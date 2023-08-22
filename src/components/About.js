import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function About() {
    return (
        <div className='text-center ' id="about">
            <Container className='about'>
                <Row>
                    <Col className='content text-white'>
                        <h1>
                        Welcome to About Us Page
                        </h1>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default About