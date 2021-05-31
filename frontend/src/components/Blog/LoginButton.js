import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const LoginButton = ({ username, password }) => {
  // let onClick = (e) => {
  //   history.push('/admin');
  // };
  return (
    <div>
      <LinkContainer
        to={
          username === 'shannonb' && password === 'password' ? '/admin' : '/404'
        }
      >
        <Button className='btn btn-warning border'>
          <h2
            style={{
              fontWeight: '700',
              color: '#333',
              fontFamily: 'fantasy',
              margin: '3px 0 -1px',
            }}
          >
            Login
          </h2>
        </Button>
      </LinkContainer>
    </div>
  );
};

export default LoginButton;
