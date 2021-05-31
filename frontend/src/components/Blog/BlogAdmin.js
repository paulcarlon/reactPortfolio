import React, { useState } from 'react';
import PostAdmin from './PostAdmin';
import NewPostForm from './NewPostForm';
import { LinkContainer } from 'react-router-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Nav } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';

const BlogAdmin = (props) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

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
      setDate(new Date().toLocaleString() + ' PST');
      let newPost = { title, date, body };
      console.log(date);
      props.onSubmit(newPost);

      setTitle('');
      setBody('');
      setComposeTitle('Compose a post:');
      props.getPosts();
      //Submit on Edit
    } else {
      console.log(e);
      e.preventDefault();
      let updatedPost = { id: postId, date, title, body };
      console.log(updatedPost);
      props.editPost(updatedPost);

      setTitle('');
      setBody('');
      setIsEdit(false);
      setComposeTitle('Compose a post:');
    }
  };

  return (
    <div>
      <br />
      <br />
      <h2
        style={{ fontSize: '3em', textShadow: '2px 2px 10px #333' }}
        className='text-white'
      >
        Blog
      </h2>
      <br />
      <br />
      <NewPostForm
        onSubmit={onSubmit}
        title={title}
        body={body}
        date={date}
        setTitle={setTitle}
        setBody={setBody}
        setDate={setDate}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        composeTitle={composeTitle}
        setComposeTitle={setComposeTitle}
      />
      {props.posts
        .slice(0)
        .reverse()
        .map((post, index) => (
          <PostAdmin
            {...post}
            key={index}
            onSubmit={onSubmit}
            onDelete={props.onDelete}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setTitle={setTitle}
            setDate={setDate}
            setBody={setBody}
            setComposeTitle={setComposeTitle}
            postId={postId}
            setPostId={setPostId}
          />
        ))}
      <br />
      <br />
      <Alert className='info' style={{ fontSize: '2em' }}>
        <LinkContainer to='/blog'>
          <Nav.Link>Logout</Nav.Link>
        </LinkContainer>
      </Alert>
    </div>
  );
};

export default BlogAdmin;
