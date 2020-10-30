import api from "./index";

export default async () => {
  return api.get("/categories");
};
