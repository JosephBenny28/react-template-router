import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'

function Footer() {
  return (
    <div className='text-center'>
        <Container className='footer'>
            <Row>
                <Col className=' py-5 text-white'>
        <h1>
        Welcome to Footer Page
        </h1>
        </Col>
        
        </Row>
        </Container>
    </div>
  )
}

export default Footer