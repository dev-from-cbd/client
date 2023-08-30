// Import the logo from the 'logo.svg' file
import logo from "./logo.svg";

// Import styles from the 'App.css' file
import "./App.css";

// Define the App function component
function App() {
  // Return a JSX element representing the component
  return (
    // Outer container with the class "App"
    <div className="App">
      {/* Header section with the class "App-header" */}
      <header className="App-header">
        {/* Image element with the 'logo' as the source, class "App-logo", and alternative text "logo" */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* Paragraph with text and a code element */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Link with class "App-link", pointing to 'reactjs.org', set to open in a new tab, and having alternative text */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Export the App component as the default export
export default App;
