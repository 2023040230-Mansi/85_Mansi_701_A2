import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    if (!task.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  function clearCompleted() {
    setTodos(
      todos.filter((todo) => !todo.completed)
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">

        <div className="card shadow">
          <div className="card-body">

            <h2 className="text-center mb-4">
              To Do App
            </h2>

            <form
              onSubmit={addTodo}
              className="input-group mb-4"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />

              <button className="btn btn-primary">
                Add
              </button>
            </form>

            {todos.length === 0 ? (
              <div className="alert alert-info">
                No tasks available.
              </div>
            ) : (
              <ul className="list-group">

                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={todo.completed}
                        onChange={() =>
                          toggleTodo(todo.id)
                        }
                      />

                      <span
                        style={{
                          textDecoration:
                            todo.completed
                              ? "line-through"
                              : "none"
                        }}
                      >
                        {todo.text}
                      </span>
                    </div>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        deleteTodo(todo.id)
                      }
                    >
                      Delete
                    </button>
                  </li>
                ))}

              </ul>
            )}

            {todos.length > 0 && (
              <button
                className="btn btn-outline-danger mt-3"
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Todo;