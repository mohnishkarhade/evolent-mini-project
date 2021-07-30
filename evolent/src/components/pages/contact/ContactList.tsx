import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import ContactTable from "./parts/ContactTable";
import ServiceFactory from "../../../services/factory/ServiceFactory";
import "./styles.scss";

const contactService = ServiceFactory.GetEmployeeService();

const ContactList = (props) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, [contacts]);

  const fetchContacts = () => {
    contactService.fetch().then((res) => {
      setContacts(res);
    });
  };

  const handleAddContact = () => {
    props.history.push("add-contact");
  };

  return (
    <div className="row">
      <div className="col-sm-12">
        <section className="page">
          <div className="page__header">
            <h3 className="page__title">All Contacts</h3>
          </div>
          <div className="page__content">
            <div>
              <Button color="primary" size="sm" onClick={handleAddContact}>
                Add Contact
              </Button>
            </div>
            <div className="contacts">
              <ContactTable contacts={contacts} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactList;
