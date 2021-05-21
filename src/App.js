import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import { FaTimes } from 'react-icons/fa';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Stream from './components/Stream';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchPosts();
      setPosts(apiPosts);
    };

    getPosts();
  }, []);

  const apiEndpoint = 'http://localhost:3000/posts';

  const getPosts = async () => {
    const apiPosts = await fetchPosts();
    setPosts(apiPosts);
  };

  const fetchPosts = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
  };

  const getPost = async (id) => {
    const res = await fetch(`${apiEndpoint}/${id}`);
    const data = await res.json();
    return data;
  };

  const deletePost = async (id) => {
    await fetch(`${apiEndpoint}/${id}`, {
      method: 'DELETE',
    });

    setPosts(posts.filter((post) => post.id !== id));
  };

  //Add post
  const addNewPost = async (post) => {
    await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    getPosts();
  };

  const editPost = async (post) => {
    console.log(post);
    const res = await fetch(`${apiEndpoint}/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        body: post.body,
      }),
    });

    getPosts();
  };

  const onSubmit = async (post) => {
    console.log(post);
    addNewPost(post);
    setPosts([...posts, post]);
  };

  return (
    <Container className='text-center'>
      <Router>
        <div>
          <ButtonGroup>
            <Button variant='outline-secondary'>
              <Link to='/portfolio'>Portfolio</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/blog'>Blog</Link>
            </Button>
            <Button variant='outline-secondary'>
              <Link to='/stream'>Stream</Link>
            </Button>
          </ButtonGroup>
          <Switch>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/blog'>
              <Blog
                posts={posts}
                setPosts={setPosts}
                onDelete={deletePost}
                editPost={editPost}
                onSubmit={onSubmit}
                fetchPosts={fetchPosts}
                getPosts={getPosts}
              />
            </Route>
            <Route path='/stream'>
              <Stream />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </Container>
  );
};

export default App;
