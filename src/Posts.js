// Import the necessary CSS file and libraries/components.
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => err); // Handle errors if any.
  }, []); // The empty dependency array ensures the effect runs only once.

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err)); // Handle errors if any.
    window.location.reload();
  };

  const updatePost = (post) => {
    setUpdatedPost(post);
    handleShow();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedPost = (e) => {
    axios.put(`/update/${updatedPost._id}`);
  };

  return (
    <div className="div_Posts">
      <h1>H1</h1>
      {/* Button for navigation with an onClick handler. */}
      <Button
        className="button_Posts"
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                className="title_Form_Control"
                placeholder="title"
                name="title"
                value={updatedPost.title ? updatedPost.title : ""}
                onChange={handleChange}
              />
              <Form.Control
                placeholder="description"
                name="description"
                value={updatedPost.description ? updatedPost.description : ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatedPost}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Conditional rendering: Display posts if available, otherwise show an empty string. */}
      {posts ? (
        <>
          {/* Map through 'posts' and render each post with buttons for actions. */}
          {posts.map((post) => {
            return (
              <div key={post._id} className="div_Post">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div className="div_Post_Button">
                  <Button
                    variant="outline-info"
                    onClick={() => updatePost(post)}
                    className="post_Button_Update"
                  >
                    Update
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    className="post_Button_Delete"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

// Export the 'Posts' component.
export default Posts;
