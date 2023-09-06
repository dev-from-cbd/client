import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  return (
    <div className="div_createPost">
      <h1>Create a post</h1>
      <Button>BACK</Button>
    </div>
  );
}

export default CreatePost;
