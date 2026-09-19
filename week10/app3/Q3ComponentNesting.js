import Header from "./Header";
import Student from "./Student";

function Q3_ComponentNesting() {
  return (
    <div>
      <h1>Component Nesting Demo</h1>

      {/* Nested Function Component */}
      <Header />

      {/* Nested Class Component */}
      <Student />
    </div>
  );
}

export default Q3_ComponentNesting;
