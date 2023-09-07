import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  return (
    <div className="div_createPost">
      <h1>Create a post</h1>
      <Button className="button_createPost" onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  );
}

export default CreatePost;
