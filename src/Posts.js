// Import the necessary CSS file and libraries/components.
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

// Define the 'Posts' component.
function Posts() {
  // Initialize a navigation function using the 'useNavigate' hook.
  const navigate = useNavigate();

  // Initialize a state variable 'posts' as an empty array using 'useState'.
  const [posts, setPosts] = useState([]);

  // Use the 'useEffect' hook to fetch data when the component mounts.
  useEffect(() => {
    // Send a GET request to "/posts" endpoint using Axios to retrieve data.
    axios
      .get("/posts")
      .then((res) => {
        // Log the response data to the console.
        console.log(res);
        // Update the 'posts' state with the data received.
        setPosts(res.data);
      })
      .catch((err) => err); // Handle errors if any.
  }, []); // The empty dependency array ensures the effect runs only once.

  // Define a function 'deletePost' to delete a post by its 'id'.
  const deletePost = (id) => {
    // Send a DELETE request to the corresponding post ID.
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err)); // Handle errors if any.

    // Reload the page to reflect changes (you might want to consider a more dynamic update).
    window.location.reload();
  };

  const updatePost = (post) => {
    console.log(post);
    handleShow();
  };

  // Render the 'Posts' component.
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

      <Modal show="show" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a post</Modal.Title>
        </Modal.Header>

        <Modal.Body>Modal body</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
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
