import { useState } from "react";
import "./EditUserModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditUserModal = ({ isOpen, onClose, handleUserUpdate }) => {
  const [userName, setUserName] = useState("");

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserUpdate(userName);
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"update"}
      title={"Change profile data"}
      buttonText={"Save changes"}
      onSubmit={handleSubmit}
    >
      <label>
        <h4 className="form__name">Username</h4>
        <input
          className="form__input form__input_type_name"
          placeholder="Name"
          type="text"
          minLength="1"
          maxLength="40"
          onChange={handleNameChange}
          value={userName || ""}
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditUserModal;
