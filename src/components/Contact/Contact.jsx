import { FaPhone, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseModal = () => setIsModalOpen(false);
  const onOpenModal = () => setIsModalOpen(true);

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
    toast.success("Contact deleted successfully!");
  };

  return (
    <div>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={onOpenModal}>Delete</button>
      {isModalOpen && (
        <div className={css.modal}>
          <p>Do you really want to delete this contact?</p>
          <div className={css.btnWrap}>
            <button className={css.modalBtn} onClick={() => handleDelete(id)}>
              Yes
            </button>
            <button className={css.modalBtn} onClick={onCloseModal}>
              No
            </button>
          </div>
        </div>
      )}
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
    </div>
  );
};

export default Contact;
