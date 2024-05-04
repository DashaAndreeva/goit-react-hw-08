import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const RegisterUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .email("You must enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(50, "Too long!")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterUserSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form>
        <div>
          <div className={css["container"]}>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              id={nameId}
              name="name"
              placeholder="Enter your name"
              className={css["input"]}
            />
          </div>
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <div className={css["container"]}>
            <label htmlFor={emailId}>Email</label>
            <Field
              type="email"
              id={emailId}
              name="email"
              placeholder="Enter your email"
              className={css["input"]}
            />
          </div>
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <div className={css["container"]}>
            <label htmlFor={passwordId}>Password</label>
            <Field
              type="password"
              id={passwordId}
              name="password"
              placeholder="Enter your password"
              className={css["input"]}
            />
          </div>
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit" className={css["button-subm"]}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
