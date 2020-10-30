import api from "./index";

export default async (type, query) => {
  return api.get("/locations", {
    params: {
      type,
      query
    }
  });
};
