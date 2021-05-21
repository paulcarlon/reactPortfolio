import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FaTimes, FaEraser } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Post = (props) => {
  // console.log(props);
  return (
    <Card>
      <Card.Title>
        {props.title}{' '}
        <Button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <FaTimes />
        </Button>
        <Button
          onClick={() => {
            props.setTitle(props.title);
            props.setBody(props.body);
            props.setPostId(props.id);
            props.setComposeTitle('Edit post:');
            props.setIsEdit(true);
          }}
        >
          <FaEraser />
        </Button>
      </Card.Title>
      <Card.Body>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Post;
