import { Link, Routes, Route } from "react-router-dom";

import FunctionComponent from "./components/FunctionComponent.jsx";
import ConditionalList from "./components/ConditionalList.jsx";
import Counter from "./components/Counter.jsx";
import StateRef from "./components/StateRef.jsx";
import DigitalClock from "./components/DigitalClock.jsx";
import ManualValidation from "./components/ManualValidation.jsx";
import LibraryValidation from "./components/LibraryValidation.jsx";
import Employees from "./components/Employees.jsx";
import Students from "./components/Students.jsx";
import Todo from "./components/Todo.jsx";

function Home() {
  const links = [
    { path: "/function", name: "1. Function Component" },
    { path: "/conditional", name: "2. Conditional Rendering, List, Nested & Children" },
    { path: "/counter", name: "3. Counter Component" },
    { path: "/state-ref", name: "4. useState and useRef" },
    { path: "/clock", name: "5. Digital Clock - useState/useEffect" },
    { path: "/manual-validation", name: "6. Manual Form Validation" },
    { path: "/library-validation", name: "7. Third Party Form Validation" },
    { path: "/employees", name: "8. Employees JSON" },
    { path: "/students", name: "9. Students Search & Filter" },
    { path: "/todo", name: "Q3. To Do App" }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        React Practical Assignment
      </h1>

      <div className="list-group">
        {links.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="list-group-item list-group-item-action"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PageLayout({ children }) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            React Assignment
          </Link>

          <Link to="/" className="btn btn-outline-light btn-sm">
            Home
          </Link>
        </div>
      </nav>

      <main className="container py-5">
        {children}
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/function"
        element={
          <PageLayout>
            <FunctionComponent />
          </PageLayout>
        }
      />

      <Route
        path="/conditional"
        element={
          <PageLayout>
            <ConditionalList />
          </PageLayout>
        }
      />

      <Route
        path="/counter"
        element={
          <PageLayout>
            <Counter />
          </PageLayout>
        }
      />

      <Route
        path="/state-ref"
        element={
          <PageLayout>
            <StateRef />
          </PageLayout>
        }
      />

      <Route
        path="/clock"
        element={
          <PageLayout>
            <DigitalClock />
          </PageLayout>
        }
      />

      <Route
        path="/manual-validation"
        element={
          <PageLayout>
            <ManualValidation />
          </PageLayout>
        }
      />

      <Route
        path="/library-validation"
        element={
          <PageLayout>
            <LibraryValidation />
          </PageLayout>
        }
      />

      <Route
        path="/employees"
        element={
          <PageLayout>
            <Employees />
          </PageLayout>
        }
      />

      <Route
        path="/students"
        element={
          <PageLayout>
            <Students />
          </PageLayout>
        }
      />

      <Route
        path="/todo"
        element={
          <PageLayout>
            <Todo />
          </PageLayout>
        }
      />
    </Routes>
  );
}

export default App;