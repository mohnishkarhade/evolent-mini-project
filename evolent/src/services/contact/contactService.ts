import DataAccessFactory from "../../utilities/data-access/factory/dataAccessFactory";

const CONTACT_API_BASE_URL = "http://localhost:8080/contacts";

const DataAccess = DataAccessFactory.GetDataAccessService();

class ContactServices {
  fetch() {
    return DataAccess.get(CONTACT_API_BASE_URL);
  }

  fetchById(contactId) {
    return DataAccess.get(CONTACT_API_BASE_URL + "/" + contactId);
  }

  delete(contactId) {
    return DataAccess.delete(CONTACT_API_BASE_URL + "/" + contactId);
  }

  add(contact) {
    return DataAccess.post(CONTACT_API_BASE_URL, contact);
  }

  edit(contact) {
    return DataAccess.put(CONTACT_API_BASE_URL + "/" + contact.id, contact);
  }
}

export default new ContactServices();
