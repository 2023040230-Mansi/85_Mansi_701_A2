import { useState } from "react";

function ManualValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (value.length < 3) {
        error = "Name must contain at least 3 characters";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter a valid email";
      }
    }

    if (name === "password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must contain at least 6 characters";
      }
    }

    return error;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2>Manual Live Validation</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <div className="text-danger">
                {errors.name}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && (
              <div className="text-danger">
                {errors.email}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />

            {errors.password && (
              <div className="text-danger">
                {errors.password}
              </div>
            )}
          </div>

          <button className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default ManualValidation;