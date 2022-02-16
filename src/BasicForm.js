import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string()
  .min(5, "Need a longer email")
  .required("fill the email"),

  password: yup
    .string()
    .required("fill the password")
    .min(8, "Need a longer password")
    .max(12, "Too much password"),
});


export function BasicForm() {

const formik = useFormik({

  initialValues:{email: "", password: "" },
  validationSchema : formValidationSchema,
  onSubmit: (values) => {
    console.log("onsubmit",values);
  },
});

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

      <input
        value={formik.values.password}
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        minLength="8"
        placeholder="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}

      <button type="submit">submit</button>
    </form>
  );
}
