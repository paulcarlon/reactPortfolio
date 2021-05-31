import React from 'react';
import { Card } from 'react-bootstrap';
const Post = (props) => {
  console.log(props);
  return (
    <Card
      className='border rounded m-4 p-4'
      style={{
        backgroundColor: 'rgba(240, 173, 78, 0.7)',
        boxShadow: '4px 7px 20px #333',
      }}
    >
      <Card.Title
        className='border rounded text-white py-1'
        style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          fontSize: '2em',
          margin: '0 15%',
        }}
      >
        {props.title}
        <br />
      </Card.Title>
      <Card.Body>
        <Card.Subtitle
          variant='secondary'
          className=' text-white rounded py-1 border'
          style={{
            backgroundColor: 'rgba(155,155,155,0.3)',
            fontSize: '1em',
            margin: '0 30%',
          }}
        >
          {props.createdAt}
        </Card.Subtitle>
        <Card.Text
          className='mt-4 text-white'
          style={{ fontSize: '2em', textShadow: '2px 2px 10px #333' }}
        >
          {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Post;
