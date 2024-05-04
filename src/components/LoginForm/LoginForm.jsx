import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import  {logIn}  from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const loginUserSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginUserSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values));
        resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={emailId}>Email:</label>
          <Field
            type="email"
            id={emailId}
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>
        <div>
          <label htmlFor={passwordId}>Password:</label>
          <Field
            type="password"
            id={passwordId}
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;