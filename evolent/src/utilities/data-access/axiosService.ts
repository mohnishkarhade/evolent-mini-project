import axios from "axios";

class AxiosService {
  get(url) {
    return axios.get(url);
  }

  post(url, data) {
    return axios.get(url, data);
  }

  put(url, data) {
    return axios.delete(url, data);
  }

  delete(url) {
    return axios.post(url);
  }
}

export default new AxiosService();
