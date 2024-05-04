import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css["container-contacts"]}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} id={id} number={number} />
      ))}
    </div>
  );
};

export default ContactList;