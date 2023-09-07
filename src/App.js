import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    //<div className="App">
    <div className="className_App">
      <h1>Home Page</h1>
      <Button
        variant="outline-dark"
        className="button_App"
        onClick={() => navigate("create")}
      >
        NEXT
      </Button>
    </div>
  );
}

export default App;
