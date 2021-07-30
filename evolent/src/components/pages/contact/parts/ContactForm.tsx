import React, { useRef } from "react";
import { useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import ProfilePhoto from "../../../common/ProfilePhoto";

const ContactForm = (props) => {
  const firstNameRef: any = useRef(null);

  useEffect(() => {
    firstNameRef.current && firstNameRef.current.focus();
  }, []);

  return (
    <Form>
      <div className="row">
        <div className="col-6">
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              tabIndex={1}
              ref={firstNameRef}
              value={props.contact.firstName}
              onChange={props.onChange}
            />
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup>
            <Label>Last Name:</Label>
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              tabIndex={2}
              value={props.contact.lastName}
              onChange={props.onChange}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <FormGroup>
            <Label>Phone No:</Label>
            <Input
              type="text"
              placeholder="Phone No"
              name="phoneNo"
              tabIndex={3}
              value={props.contact.phoneNo}
              onChange={props.onChange}
            />
          </FormGroup>
        </div>
        <div className="col-6">
          <FormGroup>
            <Label>Email:</Label>
            <Input
              placeholder="Email"
              name="email"
              tabIndex={4}
              value={props.contact.email}
              onChange={props.onChange}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Label>Photo:</Label>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="photo"
            name="photo"
            tabIndex={5}
            className="form-control"
            value={props.contact.photo}
            onChange={props.onChange}
          />
          &nbsp;
          <ProfilePhoto
            cssClass="pull-right rounded"
            url={props.contact.photo}
            width="50"
            height="50"
          />
        </div>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            name="isActive"
            checked={props.contact.isActive}
            onChange={props.onChange}
          />
          Active
        </Label>
      </FormGroup>
      <br />
      <Button color="success" onClick={props.onSave}>
        Save
      </Button>
      &nbsp;
      <Button color="secondary" onClick={props.onCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default ContactForm;
