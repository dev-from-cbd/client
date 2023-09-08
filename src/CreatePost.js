import "./App.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  return (
    <div className="div_createPost">
      <h1>Create a post</h1>
      <Form>
        <Form.Group>Form</Form.Group>
      </Form>
      <Button className="button_createPost" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}

export default CreatePost;
