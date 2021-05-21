import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const NewPostForm = (props) => {
  return (
    <div>
      <h3>{props.composeTitle}</h3>
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId='titleBody'>
          <Form.Label>Title:</Form.Label>
          <input
            type='text'
            placeholder='title'
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          ></input>
          <br />
          <Form.Label>Content:</Form.Label>

          <textarea
            type='text'
            placeholder='Your message to the world goes here!'
            value={props.body}
            onChange={(e) => props.setBody(e.target.value)}
          ></textarea>
        </Form.Group>
        <Form.Group controlId='submit'>
          <input type='submit' value='Submit'></input>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewPostForm;
