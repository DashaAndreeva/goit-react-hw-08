import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["container-contacts"]}>
      {contacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact contacts={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
