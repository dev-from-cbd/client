import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => err);
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="div_Posts">
      <h1>H1</h1>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div key={post._id} className="div_Post">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div className="div_Post_Button">
                  <Button variant="outline-info" className="post_Button_Update">
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

export default Posts;
