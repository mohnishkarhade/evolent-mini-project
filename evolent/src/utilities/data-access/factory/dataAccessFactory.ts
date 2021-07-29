import AxiosService from "../axiosService";
import FetchService from "../fetchService";

let env = "axios";

class DataAccessFactory {
  GetDataAccessService() {
    switch (env) {
      case "axios":
        return AxiosService;

      case "fetch":
        return FetchService;

      default:
        return FetchService;
    }
  }
}

export default new DataAccessFactory();
