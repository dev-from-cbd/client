import "./App.css";
// Importing a CSS file named "App.css" for styling.

import { Button, Form } from "react-bootstrap";
// Importing Button and Form components from the "react-bootstrap" library.

import { useNavigate } from "react-router-dom";
// Importing the useNavigate function from the "react-router-dom" library.

import { useState } from "react";
// Importing the useState hook from the "react" library.

import axios from "axios";
// Importing the axios library for making HTTP requests.

function CreatePost() {
  // Declaring a functional component named "CreatePost."

  const navigate = useNavigate();
  // Initializing the "navigate" function using the useNavigate hook.

  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  // Initializing a state variable "post" using the useState hook with initial values for "title" and "description."

  const handleChange = (event) => {
    // Defining a function "handleChange" that takes an event as an argument.
    const { name, value } = event.target;
    // Destructuring "name" and "value" from the event target.

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // Updating the "post" state by merging the previous state and changing the specified field.
  };

  const handleClick = (event) => {
    event.preventDefault();

    //axios
    //.post("/create", post)
    //.then((res) => console.log(res))
    //.catch((err) => console.log(err));
  };

  return (
    // Returning JSX for rendering the component.
    <div className="div_createPost">
      <h1>Create a post</h1>
      {/* Displaying a heading "Create a post." */}
      <Form>
        {/* Starting a form using the Form component from "react-bootstrap." */}
        <Form.Group>
          {/* Creating a form group. */}
          <Form.Control
            name="title"
            value={post.title}
            placeholder="Title"
            className="form_Control_title"
            onChange={handleChange}
          />
          {/* Input field for "title" with value, placeholder, class, and onChange event. */}
          <Form.Control
            name="description"
            value={post.description}
            placeholder="Description"
            className="form_Control_description"
            onChange={handleChange}
          />
          {/* Input field for "description" with value, placeholder, class, and onChange event. */}
        </Form.Group>
        <Button
          className="button_createPost"
          variant="outline-success"
          onClick={handleClick}
        >
          Create post
        </Button>
        {/* Button for creating a post with class and onClick event. */}
      </Form>
      <Button className="button_back" onClick={() => navigate(-1)}>
        BACK
      </Button>
      {/* Button for going back with class and onClick event. */}
    </div>
  );
}

export default CreatePost;
// Exporting the CreatePost component as the default export.
