import { Formik, Form, Field, ErrorMessage } from "formik";
import {addContact}  from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const initialValues = { name: "", tel: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, number: values.tel }));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css["form"]}>
          <div className={css["form-container"]}>
            <div className={css["input-container"]}>
              <label htmlFor="nameId" className={css["form-label"]}>
                Name
              </label>
              <Field name="name" type="text" className={css["input-form"]} />
              <ErrorMessage name="name" as="span" />
            </div>

            <div className={css["input-container"]}>
              <label htmlFor="telId" className={css["form-label"]}>
                Number
              </label>
              <Field name="tel" type="tel" className={css["input-form"]} />
              <ErrorMessage name="tel" as="span" />
            </div>
          </div>
          <button type="submit" className={css["button-form"]}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}