import React from 'react';
import { Col, Image, Card } from 'react-bootstrap';
const Photo = (props) => {
  return (
    <Col xs={12} md={6} lg={4} xxl={4} className='mb-3'>
      <Card
        style={{ backgroundImage: `url(${props.url})`, overflow: 'hidden' }}
      >
        <Card.Title
          className='bg-dark text-white border py-2 rounded m-1'
          style={{ fontSize: '2em' }}
        >
          {props.title}
        </Card.Title>
        <Card.Body>
          <Image
            className='border'
            src={props.url}
            alt={props.alt}
            style={{ maxWidth: '100%' }}
            rounded
          />
          <p
            className='text-white rounded mt-3'
            style={{
              fontSize: '1.5em',
              textShadow: '2px 0px 2px #000',
              fontWeight: '400',
            }}
          >
            {props.description}
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Photo;
