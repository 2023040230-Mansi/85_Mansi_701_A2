import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [semester, setSemester] = useState("");
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch("/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredStudents = students.filter((student) => {
    const matchesName = student.firstname
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSemester =
      semester === "" ||
      student.semester === semester;

    const matchesDivision =
      division === "" ||
      student.div === division;

    const matchesGender =
      gender === "" ||
      student.gender === gender;

    return (
      matchesName &&
      matchesSemester &&
      matchesDivision &&
      matchesGender
    );
  });

  return (
    <div>
      <h2>Students</h2>

      <div className="row mb-4">

        <div className="col-md-3">
          <label className="form-label">
            Search First Name
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">
            Semester
          </label>

          <select
            className="form-select"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">
            Division
          </label>

          <select
            className="form-select"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option value="">All</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label">
            Gender
          </label>

          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Semester</th>
              <th>Division</th>
              <th>Gender</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstname}</td>
                  <td>{student.lastname}</td>
                  <td>{student.semester}</td>
                  <td>{student.div}</td>
                  <td>{student.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;