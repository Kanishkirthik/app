import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Search({children}) {
  return (
    <>
    <Form>
     <FormGroup >
        <Row className='m-1 justify-content-center'>
            <Col md='3'>
        <Form.Control type='text' placeholder='Search your Course' ></Form.Control>
        </Col>
        <Col md='3' >
        <Form.Control  style={{backgroundColor:'#27374D' }} className='text-white ' type='submit'value={'search'}></Form.Control>
        </Col>
        </Row>
        <Row>
          <Col className='text-end'>
          {children}
          </Col>
        </Row>
     </FormGroup>
    </Form>
    </>
  )
}
