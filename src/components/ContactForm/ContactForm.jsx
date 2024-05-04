import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
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
          resetForm();
        }}
      >
        <Form>
          <div className={css["input-add-contact"]}>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              id={nameId}
              name="name"
              placeholder="Enter your name"
              className={css["input-only"]}
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css["input-add-contact"]}>
            <label htmlFor={numberId}>Number</label>
            <Field
              type="text"
              id={numberId}
              name="number"
              placeholder="Enter your number"
              className={css["input-only"]}
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" className={css["button-add"]}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
