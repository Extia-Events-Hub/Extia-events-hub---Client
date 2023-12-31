import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const eventService = {
  index: () => {
    return axios.get(baseUrl + "/events");
  },
  create: (data) => {
    return axios.post(baseUrl + "/events", data);
  },
  show: (eventId) => {
    return axios.get(baseUrl + "/events/" + eventId);
  },
  registerEvent: (data) => {
    return axios.post(baseUrl + "/participants/", data);
  },
  update: (eventId, data) => {
    return axios.put(baseUrl + "/events/" + eventId, data);
  },
  delete: (eventId) => {
    return axios.delete(baseUrl + "/events/" + eventId);
  },
};
