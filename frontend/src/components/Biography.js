import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Biography = () => {
  return (
    <Container>
      <Row>
        <Col className='col-xs-12 mt-5 text-center'>
          <h2
            className='d-inline text-white order mx-5 p-3 rounded'
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              border: '1px solid #fff',
              boxShadow: '5px 5px 20px #333',
              fontSize: '3em',
              textShadow:
                '2px 2px 10px rgba(240, 173, 78, 1) 5px 5px 5px rgba(0,0,0,0.9)',
              fontFamily: 'monospace',
            }}
          >
            Biography
          </h2>
        </Col>
      </Row>
      <Row className='row'>
        <Col
          className='mt-5 text-white rounded h-100'
          style={{
            margin: '0 1em',
            textShadow: '2px 2px 10px #000',
            height: '70vh',
            fontSize: '24px',
            backgroundColor: 'rgba(240, 183, 78, 0.8)',
          }}
        >
          <blockquote
            className='text-justify mt-5'
            style={{
              textShadow: '2px 2px 3px #fff',
              fontWeight: '300',
              fontSize: '2em',
              color: 'rgba(0,0,0,0.3)',
            }}
          >
            Documenting life one image at a time.
          </blockquote>
          <p style={{ fontSize: '1em' }} className=' mt-5 px-5'>
            Hello and welcome, I am Shannon Beelman, Photographer, Writer and
            Artist, thank you for stopping by.
            <br />
            <br />
            I was born in the same town that gave life to the Ringling Brother
            Circus, a truly fitting start for a person who dances to her own
            drum. I am the mother of 4 and grandmother of 5. My family has got
            top billing in my life for 30+ years, mom is still a phone call away
            but it is time to go after my dreams.
            <br />
            <br />
            I kicked cancer out of my body.
            <br />
            <br />I am a tree hugging hippy at heart.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Biography;
