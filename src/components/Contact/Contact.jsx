import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css["container-contact"]}>
      <div className={css["contact-info"]}>
        <p className={css["icons"]}>
          <FaUser />
          {name}
        </p>
        <p className={css["icons"]}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => handleDelete(id)} className={css["btn-delete"]}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
