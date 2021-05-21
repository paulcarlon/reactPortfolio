import React from 'react';
import { Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';

const DeleteButton = ({ id }) => {
  const deletePost = async (id) => {
    await fetch(
      `https://crudcrud.com/api/c1f869ea897449e7afae7a13e57a816b/posts/${id}`,
      {
        method: 'DELETE',
      }
    ).then(console.log('Deleted'));
  };

  return (
    <div>
      <Button onClick={deletePost(id)}>
        <FaTimes />
      </Button>
    </div>
  );
};

export default DeleteButton;
