class FetchService {
  get(url) {
    return fetch(url);
  }

  post(url, data) {
    return fetch(url, data);
  }

  put(url, data) {
    return fetch(url, data);
  }

  delete(url) {
    return fetch(url);
  }
}

export default new FetchService();
