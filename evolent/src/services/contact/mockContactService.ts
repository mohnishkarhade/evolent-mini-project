var data = require("./data/contacts.json");

class MockContactServices {
  fetch() {
    return Promise.resolve(data.contacts);
  }

  fetchById(contactId) {
    return Promise.resolve(data.contacts.find((x) => x.id == contactId));
  }

  delete(contactId) {
    let tempContact = data.contacts.find((x) => x.id == contactId);
    let contactIndex = data.contacts.indexOf(tempContact);
    data.contacts.splice(contactIndex, 1);

    return Promise.resolve("success");
  }

  add(contact) {
    return Promise.resolve(data.contacts.push(contact));
  }

  edit(contact) {
    let tempContact = data.contacts.find((x) => x.id == contact.id);

    tempContact.id = contact.id;
    tempContact.firstName = contact.firstName;
    tempContact.lastName = contact.lastName;
    tempContact.dob = contact.dob;
    tempContact.designation = contact.designation;
    tempContact.photo = contact.photo;
    tempContact.experiance = contact.experiance;

    return Promise.resolve("success");
  }
}

export default new MockContactServices();
