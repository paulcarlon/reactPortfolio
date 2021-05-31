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
// import e from 'cors';

const Navigation = (props) => {
  const searchSubmit = (e) => {
    e.preventDefault();

    props.setSearchInput('');
  };

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
        <LinkContainer to='/'>
          <Navbar.Brand>
            <Image
              src='http://aubrey.digital/sbp/watermark.png'
              style={{ width: '150px' }}
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle
          className='border rounded m-2 p-2'
          style={{
            backgroundColor: 'rgba(240, 173, 78, 0.7)',
            boxShadow: '4px 7px 20px #333',
          }}
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse className='rounded' id='basic-navbar-nav'>
          <Nav
            className='d-flex justify-content-between'
            style={{ width: '100%' }}
          >
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <NavDropdown
                className='mx-2'
                title='Portfolio'
                id='basic-nav-dropdown'
              >
                <LinkContainer className='rounded p-2' to='/freelance'>
                  <NavDropdown.Item className='text-center'>
                    Freelance
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer
                  className='rounded p-2'
                  style={{}}
                  to='/portrait'
                >
                  <NavDropdown.Item className='text-center'>
                    Portrait
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to='/contact'>
                <Nav.Link className='mx-2'>Contact</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/blog'>
                <Nav.Link className='mx-2'>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/biography'>
                <Nav.Link className='mx-2'>Biography</Nav.Link>
              </LinkContainer>
            </div>
            <div className='d-flex'>
              <a
                className='mt-3'
                href='https://www.facebook.com/ShannonBeelmanPhotography'
                target='_blank'
                rel='noreferrer'
              >
                <FaFacebook
                  className='mx-5'
                  style={{ color: '#fff', fontSize: '2em' }}
                />
              </a>
              <a
                className='mt-3'
                href='https://www.instagram.com/shannonbeelmanphotography'
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram
                  className='mx-5'
                  style={{ color: '#fff', fontSize: '2em' }}
                />
              </a>
              <a
                className='mt-3'
                href='https://twitter.com/beelman_s'
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter
                  className='mx-5'
                  style={{ color: '#fff', fontSize: '2em' }}
                />
              </a>
            </div>
            <Form inline>
              <FormControl
                type='text'
                value={props.searchInput}
                placeholder='Search'
                className='text-center'
                onChange={(e) => props.setSearchInput(e.target.value)}
              />
              <Button onClick={searchSubmit} variant='outline-dark'>
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
