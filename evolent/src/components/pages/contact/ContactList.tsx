import React from "react";
import { Button } from "reactstrap";

const ContactList = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <section className="page">
          <div className="page__header">
            <h3 className="page__title">All Contacts</h3>
          </div>
          <div className="page__content">
            <div>
              <Button color="primary" size="sm">
                Add Contact
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactList;
