import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handle } from "express/lib/application";

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="div_createPost">
      <h1>Create a post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            name="title"
            value={post.title}
            placeholder="Title"
            className="form_Control_title"
            onChange={handleChange}
          />
          <Form.Control
            name="description"
            value={post.description}
            placeholder="Description"
            className="form_Control_description"
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <Button className="button_createPost" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}

export default CreatePost;
