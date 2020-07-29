import axios from "axios";

const API_BASE_URL = "../data/catalog.json";

class ApiService {
  fetchCategory(param1: string) {
    return axios.get(API_BASE_URL);
  }

  fetchBranchCategory(param1: string, param2: string) {
    return axios.get(API_BASE_URL);
  }
}

export default new ApiService();
