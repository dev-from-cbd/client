// Import the CSS file associated with the App component.
import "./App.css";
// Import the Button component from the React Bootstrap library.
import { Button } from "react-bootstrap";
// Import the useNavigate hook from the react-router-dom library.
import { useNavigate } from "react-router-dom";

// Define the App component.
function App() {
  // Initialize the navigate function using the useNavigate hook.
  const navigate = useNavigate();

  return (
    // Render the App component.
    //<div className="App">
    <div className="className_App">
      <h1>Home Page</h1>
      {/* Render a Button component with specific props. */}
      <Button
        variant="outline-dark"
        className="button_App"
        // Set an onClick event to navigate to the "create" route.
        onClick={() => navigate("create")}
      >
        NEXT
      </Button>
    </div>
  );
}

// Export the App component as the default export of this module.
export default App;
