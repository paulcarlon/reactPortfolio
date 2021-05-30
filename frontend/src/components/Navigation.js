import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import {
  Navbar,
  Row,
  Col,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Container,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const Navigation = (props) => {
  return (
    <Navbar
      className='border rounded m-4 p-3'
      style={{
        backgroundColor: 'rgba(240, 173, 78, 0.7)',
        boxShadow: '4px 7px 20px #333',
      }}
      expand='lg'
    >
      <Container>
        <Row>
          <Col>
            <LinkContainer to='/'>
              <Navbar.Brand>
                {/* <Navbar.Text
                  style={{
                    fontSize: '1em',
                    fontWeight: '800',
                    fontFamily: 'cursive',
                    textShadow: '2px 2px 10px #000',
                  }}
                  className='text-white'
                >
                  Shannon Beelman Photography
                </Navbar.Text> */}
                <Image
                  src='http://aubrey.digital/sbp/watermark.png'
                  style={{ width: '150px' }}
                />
              </Navbar.Brand>
            </LinkContainer>
          </Col>
        </Row>

        <Navbar.Toggle
          className='border rounded m-2 p-2'
          style={{
            backgroundColor: 'rgba(240, 173, 78, 0.7)',
            boxShadow: '4px 7px 20px #333',
          }}
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <NavDropdown title='Portfolio' id='basic-nav-dropdown'>
              <LinkContainer
                className='border rounded p-2'
                style={{
                  backgroundColor: 'rgba(240, 173, 78, 0.7)',
                  boxShadow: '4px 7px 20px #333',
                }}
                to='/freelance'
              >
                <NavDropdown.Item className='text-center'>
                  Freelance
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer
                className='border rounded p-2'
                style={{
                  backgroundColor: 'rgba(240, 173, 78, 0.7)',
                  boxShadow: '4px 7px 20px #333',
                }}
                to='/portrait'
              >
                <NavDropdown.Item className='text-center'>
                  Portrait
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/blog'>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/biography'>
              <Nav.Link>Biography</Nav.Link>
            </LinkContainer>
            <div className='d-flex justify-content-center'>
              <Nav.Link>
                <a
                  href='https://www.facebook.com/ShannonBeelmanPhotography'
                  target='_blank'
                >
                  <FaFacebook
                    className='mx-1'
                    style={{ color: '#fff', fontSize: '2em' }}
                  />
                </a>
              </Nav.Link>
              <Nav.Link>
                <a
                  href='https://www.instagram.com/shannonbeelmanphotography'
                  target='_blank'
                >
                  <FaInstagram
                    className='mx-1'
                    style={{ color: '#fff', fontSize: '2em' }}
                  />
                </a>
              </Nav.Link>
              <Nav.Link target='_blank'>
                <a href='https://twitter.com/beelman_s' target='_blank'>
                  <FaTwitter
                    className='mx-1'
                    style={{ color: '#fff', fontSize: '2em' }}
                  />
                </a>
              </Nav.Link>
            </div>
          </Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2 my-2'
            />
            <Button variant='outline-dark'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
