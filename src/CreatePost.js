// Import the necessary CSS file and components from react-bootstrap.
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Define the CreatePost component.
function CreatePost() {
  // Initialize a navigation function using the useNavigate hook.
  const navigate = useNavigate();

  // Initialize a state variable 'post' with empty title and description.
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  // Create a function 'handleChange' to update 'post' when input values change.
  const handleChange = (event) => {
    // Extract 'name' and 'value' from the input element.
    const { name, value } = event.target;

    // Update 'post' using the previous state and new values.
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Create a function 'handleClick' to handle form submission.
  const handleClick = (event) => {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Send a POST request with the 'post' data to the "/create" endpoint.
    axios
      .post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // Navigate to the "posts" route after successful submission.
    navigate("posts");
  };

  // Render the CreatePost component.
  return (
    <div className="div_createPost">
      <h1>Create a post</h1>
      <Form>
        <Form.Group>
          {/* Input field for 'title' with controlled value and onChange handler. */}
          <Form.Control
            name="title"
            value={post.title}
            placeholder="Title"
            className="form_Control_title"
            onChange={handleChange}
          />
          {/* Input field for 'description' with controlled value and onChange handler. */}
          <Form.Control
            name="description"
            value={post.description}
            placeholder="Description"
            className="form_Control_description"
            onChange={handleChange}
          />
        </Form.Group>
        {/* Button to create a post with an onClick handler. */}
        <Button
          className="button_createPost"
          variant="outline-success"
          onClick={handleClick}
        >
          Create post
        </Button>
      </Form>
      {/* Button to navigate back with an onClick handler. */}
      <Button className="button_back" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}

// Export the CreatePost component.
export default CreatePost;