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

  return (
    <div className="div_Posts">
      <h1>H1</h1>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div className="div_Post">
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div className="div_Post_Button">
                  <Button className="post_Button">Update</Button>
                  <Button>Delete</Button>
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
