import React, { useState, useEffect } from "react";

function App1() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Time</h1>

      <h2>{time.toLocaleTimeString()}</h2>

      <p>
        The time updates automatically every second.
      </p>
    </div>
  );
}

export default App1;
