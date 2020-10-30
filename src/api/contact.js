import api from "./index";

const sendContactMessage = ({ name, email, message }) => {
  return api.post("/contact", { name, email, message });
};

export default sendContactMessage;
