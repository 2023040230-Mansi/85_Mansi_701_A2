import { useState } from "react";

function StudentCard({ student }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{student.name}</h5>
        <p>Course: {student.course}</p>
      </div>
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="border rounded p-4 bg-light">
      <h4>Children / Containment</h4>
      {children}
    </div>
  );
}

function ConditionalList() {
  const [loggedIn, setLoggedIn] = useState(false);

  const students = [
    {
      id: 1,
      name: "Rahul",
      course: "BCA"
    },
    {
      id: 2,
      name: "Priya",
      course: "BSc IT"
    },
    {
      id: 3,
      name: "Amit",
      course: "MCA"
    }
  ];

  return (
    <div>
      <h2>Conditional Rendering, List & Nested Components</h2>

      <hr />

      <h4>Conditional Rendering</h4>

      <button
        className="btn btn-primary mb-3"
        onClick={() => setLoggedIn(!loggedIn)}
      >
        {loggedIn ? "Logout" : "Login"}
      </button>

      {loggedIn ? (
        <div className="alert alert-success">
          Welcome! You are logged in.
        </div>
      ) : (
        <div className="alert alert-warning">
          Please login.
        </div>
      )}

      <h4>List Rendering</h4>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}

      <Container>
        <p>
          This paragraph is passed from the parent component
          using the <strong>children</strong> prop.
        </p>

        <button className="btn btn-success">
          Child Content
        </button>
      </Container>
    </div>
  );
}

export default ConditionalList;