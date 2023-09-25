import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
    </div>
  );
}

export default Posts;
