function App() {
  // JSX markup stored in a variable
  const content = (
    <div>
      <h2 style={{ color: "blue" }}>Welcome to JSX</h2>

      <p>JSX allows us to write HTML inside JavaScript.</p>

      <ul>
        <li>Easy to read</li>
        <li>Looks like HTML</li>
        <li>Used in React components</li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Writing Markup with JSX</h1>

      {/* Rendering JSX variable */}
      {content}
    </div>
  );
}

export default App;