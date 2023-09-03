// Define a function reportWebVitals that takes onPerfEntry as a parameter.
const reportWebVitals = (onPerfEntry) => {
  // Check if onPerfEntry is a function and exists.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import the 'web-vitals' module asynchronously.
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call various functions from 'web-vitals' and pass onPerfEntry as a callback.
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Export the reportWebVitals function.
export default reportWebVitals;
