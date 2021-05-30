import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaTimes, FaEraser } from 'react-icons/fa';

const PostAdmin = (props) => {
  return (
    <Card
      className='border rounded p-4'
      style={{
        backgroundColor: 'rgba(240, 173, 78, 0.7)',
        margin: '3em 2.7em',
        boxShadow: '4px 7px 20px #333',
      }}
    >
      <Card.Title>
        {props.title}{' '}
        <Button
          variant='danger'
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <FaTimes />
        </Button>
        <Button
          variant='warning'
          onClick={() => {
            props.setTitle(props.title);
            // props.setDate(props.date);
            props.setBody(props.body);
            props.setPostId(props.id);
            props.setComposeTitle('Edit post:');
            props.setIsEdit(true);
          }}
        >
          <FaEraser />
        </Button>
        <br />
        {props.date}
      </Card.Title>
      <Card.Body>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default PostAdmin;
