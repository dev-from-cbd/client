// Import necessary functions from testing libraries
import { render, screen } from "@testing-library/react";
// Import the App component to be tested
import App from "./App";

// Test case: renders the 'learn react' link in the App component
test("renders learn react link", () => {
  // Render the App component
  render(<App />);
  // Search for an element containing the text 'learn react' case-insensitively
  const linkElement = screen.getByText(/learn react/i);
  // Expect the 'learn react' link element to be in the document
  expect(linkElement).toBeInTheDocument();
});
