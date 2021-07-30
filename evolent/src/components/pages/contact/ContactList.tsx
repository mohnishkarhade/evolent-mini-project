import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import ContactTable from "./parts/ContactTable";
import ServiceFactory from "../../../services/factory/ServiceFactory";
import "./styles.scss";
import uiFactory from "../../../utilities/ui/factory/uiFactory";

const contactService = ServiceFactory.GetContactService();
const dialogBox = uiFactory.GetDialogBox();

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
    props.history.push("/add-contact");
  };

  const handleEditContact = (id) => {
    props.history.push(`/edit-contact/${id}`);
  };

  const handleDelete = (id) => {
    if (dialogBox.confirm("Are you sure?")) {
      contactService.delete(id).then((res) => {
        setContacts(contacts.filter((x: any) => x.id !== id));
      });
    }
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
              <ContactTable
                contacts={contacts}
                onDelete={handleDelete}
                onEdit={handleEditContact}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactList;
