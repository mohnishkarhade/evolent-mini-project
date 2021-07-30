window.data = require("./data/contacts.json");

class MockContactServices {
  fetch() {
    return Promise.resolve(window.data.contacts);
  }

  fetchById(contactId) {
    return Promise.resolve(window.data.contacts.find((x) => x.id == contactId));
  }

  delete(contactId) {
    let tempContact = window.data.contacts.find((x) => x.id == contactId);
    let contactIndex = window.data.contacts.indexOf(tempContact);
    window.data.contacts.splice(contactIndex, 1);

    return Promise.resolve("success");
  }

  add(contact) {
    contact.id = window.data.contacts.length + 1;
    return Promise.resolve(window.data.contacts.push(contact));
  }

  edit(contact) {
    let tempContact = window.data.contacts.find((x) => x.id == contact.id);

    tempContact.id = contact.id;
    tempContact.firstName = contact.firstName;
    tempContact.lastName = contact.lastName;
    tempContact.phoneNo = contact.phoneNo;
    tempContact.email = contact.email;
    tempContact.photo = contact.photo;
    tempContact.isActive = contact.isActive;

    return Promise.resolve("success");
  }
}

export default new MockContactServices();
