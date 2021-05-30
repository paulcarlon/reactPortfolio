import React, { useState } from 'react';
import Post from './Post';
import { LinkContainer } from 'react-router-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Nav } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

const Blog = (props) => {
  console.log(props);
  const [title, setTitle] = useState('');
  const [date] = useState('');
  const [body, setBody] = useState('');
  const [postId, setPostId] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [composeTitle, setComposeTitle] = useState('Compose a post:');

  // //Update post
  // const editPost = async (id) => {
  //   console.log(id);
  //   await fetch(`http://localhost:3000/posts/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       body: body,
  //     }),
  //   }).then((data) => {
  //     return data;
  //   });
  // };

  // const getPostId = (id) => {
  //   let editId = id;
  //   return editId;
  // };

  const onSubmit = (e) => {
    //Submit on new post
    if (!isEdit) {
      e.preventDefault();
      // let fresca = uuidv4();
      // setNewId(fresca);
      // setDate(new Date().toLocaleString());
      console.log(date);
      let newPost = { title, date, body };
      props.onSubmit(newPost);

      setTitle('');
      setBody('');
      setComposeTitle('Compose a post:');
      props.getPosts();

      //Submit on Edit
    } else {
      console.log(e);
      e.preventDefault();
      let updatedPost = { id: postId, title, date, body };
      console.log(updatedPost);
      props.editPost(updatedPost);

      setTitle('');
      setBody('');
      setIsEdit(false);
      setComposeTitle('Compose a post:');
    }
  };

  return (
    <div className='mt-5'>
      <h2
        className='d-inline text-white order mx-5 p-3 rounded'
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
      <br />
      <br />
      {/* <NewPostForm
        onSubmit={onSubmit}
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        composeTitle={composeTitle}
        setComposeTitle={setComposeTitle}
      /> */}
      {props.posts
        .slice(0)
        .reverse()
        .map((post, index) => (
          <Post
            {...post}
            key={index}
            onSubmit={onSubmit}
            onDelete={props.onDelete}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setTitle={setTitle}
            setBody={setBody}
            composeTitle={composeTitle}
            setComposeTitle={setComposeTitle}
            postId={postId}
            setPostId={setPostId}
          />
        ))}
      <br />
      <br />
      <Alert className='info' style={{ fontSize: '2em' }}>
        <LinkContainer to='/login'>
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      </Alert>
    </div>
  );
};

export default Blog;
