import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const LoginButton = ({ username, password }) => {
  // let onClick = (e) => {
  //   history.push('/admin');
  // };
  console.log(password);

  return (
    <div>
      <LinkContainer
        to={
          username === 'shannonb' && password === 'password' ? '/admin' : '/404'
        }
      >
        <Button className='btn btn-warning border font-weight-bold'>
          Login
        </Button>
      </LinkContainer>
    </div>
  );
};

export default LoginButton;
