import React, { useState, useEffect } from "react";
import ServiceFactory from "../../../services/factory/ServiceFactory";
import ContactForm from "./parts/ContactForm";

var contactService = ServiceFactory.GetContactService();

const initialContact = {
  id: 0,
  firstName: "",
  lastName: "",
  phoneNo: "",
  email: "",
  photo: "",
  isActive: false,
};

const EditContactDetail = (props) => {
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = () => {
    contactService.fetchById(Number(props.match.params.id)).then((result) => {
      if (result) {
        setContact({
          id: result.id,
          firstName: result.firstName,
          lastName: result.lastName,
          phoneNo: result.phoneNo,
          email: result.email,
          photo: result.photo,
          isActive: result.isActive,
        });
      }
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

  const handleSave = (e) => {
    e.preventDefault();
    let data = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      phoneNo: contact.phoneNo,
      email: contact.email,
      photo: contact.photo,
      isActive: contact.isActive,
    };
    contactService.edit(data).then((res) => {
      props.history.push("/contacts");
    });
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <section className="page">
          <div className="page__header">
            <h3 className="page__title">Edit Contact</h3>
          </div>
          <div className="page__content">
            <div className="add-form">
              {contact.id > 0 ? (
                <ContactForm
                  contact={contact}
                  onChange={handleChange}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditContactDetail;
