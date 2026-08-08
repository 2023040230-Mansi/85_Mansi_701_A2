import { useFormik } from "formik";
import * as Yup from "yup";

function LibraryValidation() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must contain at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must contain at least 6 characters")
        .required("Password is required")
    }),

    onSubmit: (values) => {
      alert(
        "Submitted: " + JSON.stringify(values)
      );
    }
  });

  return (
    <div className="card">
      <div className="card-body">
        <h2>Formik + Yup Validation</h2>

        <form onSubmit={formik.handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              {...formik.getFieldProps("name")}
            />

            {formik.touched.name &&
              formik.errors.name && (
                <div className="text-danger">
                  {formik.errors.name}
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
              {...formik.getFieldProps("email")}
            />

            {formik.touched.email &&
              formik.errors.email && (
                <div className="text-danger">
                  {formik.errors.email}
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
              {...formik.getFieldProps("password")}
            />

            {formik.touched.password &&
              formik.errors.password && (
                <div className="text-danger">
                  {formik.errors.password}
                </div>
              )}
          </div>

          <button
            type="submit"
            className="btn btn-success"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default LibraryValidation;