import React from 'react';
import LoginButton from './LoginButton';

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  fourOhFour,
}) => {
  console.log(password, setPassword);
  let showPassword = () => {
    let passwordInput = document.querySelector('#password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: '70vh',
      }}
    >
      <h2
        className='text-white order mx-5 p-3 rounded'
        style={{
          border: '1px solid #fff',
          boxShadow: '5px 5px 20px #333',
          fontSize: '3em',
          textShadow: '1px 1px 5px #333',
          fontFamily: 'monospace',
        }}
      >
        Blog
      </h2>
      <p
        style={{
          margin: '10px 0',
          color: '#fff',
          fontSize: '1.4em',
          fontWeight: '700',
          textShadow: '2px 2px 5px #000',
        }}
      >
        Username
      </p>
      <input
        type='text'
        placeholder='Enter your username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          borderRadius: '6px',
          border: '0',
          height: '50px',
          backgroundColor: 'lavender',
          color: 'purple',
          width: '250px',
          textAlign: 'center',
          marginBottom: '1em',
        }}
      />
      <p
        style={{
          margin: '10px 0',
          color: '#fff',
          fontSize: '1.4em',
          fontWeight: '600',
          textShadow: '2px 2px 10px #000',
        }}
      >
        Password
      </p>
      <input
        id='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='Enter your password'
        style={{
          borderRadius: '6px',
          border: '0',
          height: '50px',
          backgroundColor: 'lavender',
          color: 'purple',
          width: '250px',
          textAlign: 'center',
        }}
      />
      <div style={{ display: 'flex' }}>
        <p
          style={{
            margin: '10px 0',
            color: '#fff',
            fontSize: '1.4em',
            fontWeight: '600',
            textShadow: '2px 2px 10px #000',
          }}
        >
          Show Password:
        </p>
        <input
          type='checkbox'
          className='bg-warning'
          style={{ height: '56px', marginLeft: '4px', width: '20px' }}
          onClick={showPassword}
        ></input>
      </div>
      <LoginButton
        username={username}
        setUserName={setUsername}
        password={password}
        setPassword={setPassword}
        fourOhFour={fourOhFour}
      />
    </div>
  );
};

export default LoginForm;
