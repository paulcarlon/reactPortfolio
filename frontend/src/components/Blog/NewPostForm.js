import React from 'react';
import { Form } from 'react-bootstrap';
const NewPostForm = (props) => {
  return (
    <div>
      <h3
        className='d-inline text-white border p-3 rounded'
        style={{
          border: '1px solid #fff',
          boxShadow: '5px 5px 20px #333',
          fontSize: '2em',
          textShadow: '1px 1px 5px #333',
          fontFamily: 'monospace',
        }}
      >
        {props.composeTitle}
      </h3>
      <Form onSubmit={props.onSubmit} className='mt-5'>
        <Form.Group controlId='titleBody'>
          <Form.Label
            className='text-white border rounded p-1 m-2'
            style={{
              backgroundColor: 'rgba(0,0,0,0.3)',
              fontWeight: '600',
              fontSize: '1.5em',
              fontFamily: 'monospace',
              boxShadow: '2px 2px 10px #333',
            }}
          >
            Title:
          </Form.Label>
          <input
            className='rounded'
            style={{ border: 'none', width: '27em', height: '2.5em' }}
            type='text'
            placeholder='title'
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          ></input>
          <br />
          <Form.Label
            className='text-white border rounded p-1 m-2'
            style={{
              backgroundColor: 'rgba(0,0,0,0.3)',

              fontWeight: '600',
              fontSize: '1.5em',
              fontFamily: 'monospace',
              boxShadow: '2px 2px 10px #333',
            }}
          >
            Content:
          </Form.Label>

          <textarea
            className='rounded'
            style={{ border: 'none', height: '200px', width: '400px' }}
            type='text'
            placeholder='Your message to the world goes here!'
            value={props.body}
            onChange={(e) => props.setBody(e.target.value)}
          ></textarea>
        </Form.Group>
        <Form.Group controlId='submit'>
          <input
            type='submit'
            className='btn btn-success p-3'
            style={{ fontSize: '1.5em', fontWeight: 'bold' }}
            value='Submit'
          ></input>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewPostForm;
