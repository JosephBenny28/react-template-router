import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Contact() {
    return (
        <div className='text-center' id='contact' >
            <Container className='contact'>
                <Row>
                    <Col className='content text-white'>
                        <h1>
                        Welcome to Contact Page
                        </h1>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Contact