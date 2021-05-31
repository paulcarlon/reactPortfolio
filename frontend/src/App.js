import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation.js';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Freelance from './components/Portfolio/Freelance/Freelance';
import Portrait from './components/Portfolio/Portrait/Portrait';
import Blog from './components/Blog/Blog';
import BlogAdmin from './components/Blog/BlogAdmin';
import LoginForm from './components/Blog/LoginForm';
import Contact from './components/Contact';
import Biography from './components/Biography';

const App = () => {
  const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchPosts();
      setPosts(apiPosts);
    };

    getPosts();
  }, []);

  const apiEndpoint = 'http://localhost:5000/api/posts/';

  const getPosts = async () => {
    const apiPosts = await fetchPosts();
    setPosts(apiPosts);
  };

  const fetchPosts = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    return data;
  };

  // const getPost = async (id) => {
  //   const res = await fetch(`${apiEndpoint}/${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  const deletePost = async (id) => {
    await fetch(`${apiEndpoint}/${id}`, {
      method: 'DELETE',
    });

    setPosts(posts.filter((post) => post.id !== id));

    getPosts();
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
    await fetch(`${apiEndpoint}/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        date: post.date,
        body: post.body,
      }),
    });

    getPosts();
  };

  const onSubmit = async (post) => {
    addNewPost(post);
    setPosts([...posts, post]);
    console.log(posts);
  };

  const fourOhFour = (match) => {
    console.log(match);
    const buzzOff = `That username and password combination did not match our records.
      
      `;
    return (
      <div style={{ height: '400px' }}>
        <h3
          style={{
            marginTop: '15%',
            color: '#333',
            textShadow: '1px 1px 5px #fff',
          }}
        >
          {buzzOff}
        </h3>
        <br />
        <br />
        <Link to='/login' style={{ fontSize: '2em', textDecoration: 'none' }}>
          Try Again
        </Link>
      </div>
    );
  };

  return (
    <Router>
      <Container className='text-center'>
        <Navigation searchInput={searchInput} setSearchInput={setSearchInput} />
        <Switch>
          <Route path='/freelance'>
            <Freelance />
          </Route>
          <Route path='/portrait'>
            <Portrait />
          </Route>
          <Route path='/contact' component={Contact}></Route>
          <Route path='/blog'>
            <Blog
              getPosts={getPosts}
              posts={posts}
              setPosts={setPosts}
              editPost={editPost}
              onSubmit={onSubmit}
              onDelete={deletePost}
              username={username}
              setUserName={setUsername}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          <Route path='/admin'>
            <BlogAdmin
              getPosts={getPosts}
              posts={posts}
              setPosts={setPosts}
              editPost={editPost}
              onSubmit={onSubmit}
              onDelete={deletePost}
            />
          </Route>
          <Route path='/biography' component={Biography}></Route>
          <Route path='/login'>
            <LoginForm
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              fourOhFour={fourOhFour}
            />
          </Route>
          <Route path='/404' component={fourOhFour}></Route>
          <Route
            path='/email'
            component={() => {
              window.location.href = 'mailto:shannonbeelman@gmail.com';
              return null;
            }}
          />
          <Route
            path='/phone'
            component={() => {
              window.location.href = 'tel:702-630-8744';
              return null;
            }}
          />

          <Route path='/'></Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
