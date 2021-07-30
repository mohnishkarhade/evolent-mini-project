import ContactService from "../contact/contactService";
import MockContactServices from "../contact/mockContactService";

let env = "mock-data-test";

class ServiceFactory {
  GetEmployeeService() {
    switch (env) {
      case "development":
        return ContactService;

      case "production":
        return ContactService;

      case "mock-data-test":
        return MockContactServices;

      default:
        return MockContactServices;
    }
  }
}

export default new ServiceFactory();
