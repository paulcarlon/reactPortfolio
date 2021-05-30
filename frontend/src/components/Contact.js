import React, { useState } from 'react';
import {
  Container,
  Row,
  Form,
  Col,
  Card,
  Alert,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
  const [mailingList, setMailingList] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let id = uuidv4();
    let mailInfo = { id, name, email };
    // console.log(mailInfo);
    // if (mailingList.length === 0) {
    //   setMailingList([{ mailInfo }]);
    // } else {
    setMailingList([...mailingList, { mailInfo }]);
    // }
    console.log(mailingList);
  };
  return (
    <Container>
      <main className='content'>
        <Row>
          <Col className='col-xs-12 my-5 text-center'>
            <h2
              // className='text-center text-dark mt-4 mx-5 alert alert-secondary'
              // style={{ backgroundColor: 'rgba(240, 173, 78, 0.7)' }}
              className='d-inline text-white order mx-5 p-3 rounded'
              style={{
                border: '1px solid #fff',
                boxShadow: '5px 5px 20px #333',
                fontSize: '3em',
                textShadow: '1px 1px 5px #333',
                fontFamily: 'monospace',
              }}
            >
              Contact
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className='mt-4' xs={12} md={6}>
            <Card
              className='card mb-2 card-body text-secondary text-center'
              style={{
                background: 'url(https://www.aubrey.digital/IMG_0551.jpg)',
                backgroundSize: '100%',
                backgroundPositionY: '90%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <Card.Title className='text-white'>
                <p style={{ fontSize: '3em', textShadow: '2px 2px 5px #000' }}>
                  Shannon Beelman
                </p>
              </Card.Title>
              <Card.Body>
                <Link
                  className='text-decoration-none card-link link-warning'
                  to='/email'
                >
                  <h3
                    className='px-2'
                    style={{
                      marginTop: '-9%',
                      fontWeight: '600',
                      fontSize: '2.5em',
                      textShadow: '2px 2px 5px #000',
                      paddingBottom: '10px',
                    }}
                  >
                    shannonbeelman@gmail.com
                  </h3>
                </Link>
                <br />
                <br />
                <Link
                  className='text-decoration-none card-link link-warning'
                  style={{ textShadow: '2px 2px 5px #000' }}
                  to='/phone'
                >
                  <h3
                    style={{
                      marginTop: '-14%',
                      fontWeight: '600',
                      fontSize: '2.2em',
                      textShadow: '2px 2px 5px #000',
                    }}
                  >
                    702-630-8744
                  </h3>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-lg-6'>
            <Alert className='mx-3'>
              <h1
                style={{ textShadow: '2px 0px 2px #333' }}
                className='text-white'
              >
                Join the mailing list!
              </h1>
            </Alert>
            <Form onSubmit={onSubmit} className='bg-dark p-5 rounded border'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='text-light'>Name:</Form.Label>
                <Form.Control
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type='text'
                  placeholder='Enter name'
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='text-light'>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  placeholder='Enter email'
                />
                <Form.Text className='text-muted text-light'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              {/* <Form.Group controlId='formBasicPassword'>
                <Form.Label className='text-light'>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group> */}

              <Button variant='primary' className='mt-3' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default Contact;
