import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, ButtonGroup } from "reactstrap";

import { getInitials, getRandomColor } from "../../../../utilities/helper";
import ProfilePhoto from "../../../common/ProfilePhoto";

const ContactTable = (props) => {
  return (
    <table className="table table-striped table-sm table-borderless">
      <thead>
        <tr>
          <th>No.</th>
          <th>Photo</th>
          <th>First name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.contacts.map((contact, index) => (
          <tr key={contact.id}>
            <td>
              <b>{index + 1}</b>
            </td>
            <td>
              <ProfilePhoto
                url={contact.photo}
                initials={getInitials(contact.firstName, contact.lastName)}
                bgColor={getRandomColor()}
                width="50"
                height="50"
                cssClass="rounded"
              />
            </td>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phoneNo}</td>
            <td>{contact.email}</td>
            <td>
              {contact.isActive ? (
                <label className="badge badge-success">Active</label>
              ) : (
                <label className="badge badge-secondary">In Active</label>
              )}
            </td>

            <td>
              <Button
                color="link"
                size="sm"
                className="text-success"
                onClick={() => props.onEdit(contact.id)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              &nbsp;
              <Button
                color="link"
                size="sm"
                className="text-danger"
                onClick={() => props.onDelete(contact.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
