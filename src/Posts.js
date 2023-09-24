import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function Posts() {
  useEffect(() => {
    axios.get("/posts");
  }, []);

  return (
    <div className="div_Posts">
      <h1>H1</h1>
    </div>
  );
}

export default Posts;
