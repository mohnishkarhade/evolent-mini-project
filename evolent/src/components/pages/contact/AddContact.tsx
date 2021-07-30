import React from "react";
import { useState } from "react";
import ContactForm from "./parts/ContactForm";
import ServiceFactory from "../../../services/factory/ServiceFactory";

const contactService = ServiceFactory.GetContactService();

const initialContact = {
  id: 0,
  firstName: "",
  lastName: "",
  phoneNo: "",
  email: "",
  photo: "",
  isActive: false,
};

const AddContact = (props) => {
  const [contact, setContact] = useState(initialContact);

  const handleSave = (e) => {
    e.preventDefault();
    const data = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNo: contact.phoneNo,
      email: contact.email,
      photo: contact.photo,
      isActive: contact.isActive,
    };

    contactService.add(data).then((res) => {
      props.history.push("/contacts");
    });
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  const handleCancel = (e) => {
    props.history.push("/contacts");
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <section className="page">
          <div className="page__header">
            <h3 className="page__title">Add Contact</h3>
          </div>
          <div className="page__content">
            <div className="add-form">
              <ContactForm
                contact={contact}
                onChange={handleChange}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddContact;
