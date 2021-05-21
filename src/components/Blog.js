import React, { useState } from 'react';
import Post from './Post';
import NewPostForm from './NewPostForm';
import Alert from 'react-bootstrap/Alert';
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { FaTimes } from 'react-icons/fa';

const Blog = (props) => {
  // console.log(props);
  const [title, setTitle] = useState('');
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

  const getPostId = (id) => {
    let editId = id;
    return editId;
  };

  const onSubmit = (e) => {
    //Submit on new post
    if (!isEdit) {
      e.preventDefault();
      let fresca = uuidv4();
      // setNewId(fresca);
      let newPost = { title, body };
      props.onSubmit(newPost);

      setTitle('');
      setBody('');
      setComposeTitle('Compose a post:');
      props.getPosts();

      //Submit on Edit
    } else {
      console.log(e);
      e.preventDefault();
      let updatedPost = { id: postId, title, body };
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
      <h2>Blog</h2>
      <br />
      <br />
      <NewPostForm
        onSubmit={onSubmit}
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        composeTitle={composeTitle}
        setComposeTitle={setComposeTitle}
      />
      {props.posts.map((post, index) => (
        <Post
          {...post}
          key={index}
          onSubmit={onSubmit}
          onDelete={props.onDelete}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          setTitle={setTitle}
          setBody={setBody}
          setComposeTitle={setComposeTitle}
          postId={postId}
          setPostId={setPostId}
        />
      ))}
      <br />
      <br />
    </div>
  );
};

export default Blog;
