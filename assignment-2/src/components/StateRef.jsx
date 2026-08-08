import { useRef, useState } from "react";

function StateRef() {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const renderCount = useRef(0);

  renderCount.current++;

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2>useState and useRef</h2>

        <div className="mb-3">
          <label className="form-label">
            Enter Name
          </label>

          <input
            ref={inputRef}
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={focusInput}
        >
          Focus Input
        </button>

        <hr />

        <p>
          Name: <strong>{name}</strong>
        </p>

        <p>
          Render Count: {renderCount.current}
        </p>
      </div>
    </div>
  );
}

export default StateRef;