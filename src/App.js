import "./App.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Define the App function component
function App() {
  const navigate = useNavigate();

  return (
    // Outer container with the class "App"
    <div className="App">
      <h1>Home Page</h1>
      <Button onClick={() => navigate("create")}>NEXT</Button>
    </div>
  );
}

// Export the App component as the default export
export default App;
