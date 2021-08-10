import axios from "axios";

// Kitsu API, docs: https://kitsu.docs.apiary.io/#introduction/json:api
const api = axios.create({
  baseURL: "https://kitsu.io/api/edge/",

  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});

export default api;
