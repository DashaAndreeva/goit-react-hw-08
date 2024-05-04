import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useId } from "react";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  return (
    <>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addContact(values));
          toast.success("Contact added successfully!");
          resetForm();
        }}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name:</label>
            <Field
              type="text"
              id={nameId}
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div>
            <label htmlFor={numberId}>Number:</label>
            <Field
              type="text"
              id={numberId}
              name="number"
              placeholder="Enter your number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: { duration: 2000 },
        }}
      />
    </>
  );
};

export default ContactForm;
