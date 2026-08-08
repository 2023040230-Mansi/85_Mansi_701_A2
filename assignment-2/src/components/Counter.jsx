import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h2>Counter</h2>

        <h1 className="display-3">{count}</h1>

        <button
          className="btn btn-danger m-2"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className="btn btn-secondary m-2"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          className="btn btn-success m-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;