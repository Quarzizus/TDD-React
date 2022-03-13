import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>Clicks: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>
  );
};

export { Counter };
