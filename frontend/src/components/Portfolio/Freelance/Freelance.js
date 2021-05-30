import React, { useState } from 'react';
import Photo from '../Photo';
import { Row, Col, Container } from 'react-bootstrap';

const Freelance = () => {
  const [freelancePhotos] = useState([
    {
      id: 1,
      title: 'Barack Obama',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2001.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
    {
      id: 2,
      title: 'Joe Biden',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2002.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
    {
      id: 3,
      title: 'Bernie Sanders',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2003.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
    {
      id: 4,
      title: 'Carlyn Waters',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2004.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
    {
      id: 5,
      title: 'Carlyn Waters',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2005.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
    {
      id: 6,
      title: 'Carlyn Waters',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      url: 'http://aubrey.digital/sbp/images/Freelance%2006.jpg',
      alt: 'this is a message for ppl on screen readers',
    },
  ]);

  return (
    <div>
      <Container>
        <Row>
          <Col className='col-xs-12 text-center'>
            <h2
              className='text-center text-dark mt-4 mx-5 alert alert-secondary'
              style={{ backgroundColor: 'rgba(240, 173, 78, 0.7)' }}
            >
              Freelance
            </h2>
          </Col>
        </Row>
        <Row>
          {freelancePhotos.map((photo, index) => (
            <Photo
              {...photo}
              key={index}
              // onSubmit={onSubmit}
              // onDelete={props.onDelete}
              // isEdit={isEdit}
              // setIsEdit={setIsEdit}
              // setTitle={setTitle}
              // setBody={setBody}
              // setComposeTitle={setComposeTitle}
              // postId={postId}
              // setPostId={setPostId}
            />
          ))}
        </Row>
      </Container>
      {/* <Row className='mx-auto'>
        <Col className='col-lg-4'>
          <Card
            className='card text-dark overflow-hidden mb-3'
            style={{ maxHeight: '400px' }}
          >
            <CardImg className='card-img-top' src='' alt='Card image' />
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>Barack Obama</Card.Title>
              <p className='card-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </div>
  );
};

export default Freelance;
