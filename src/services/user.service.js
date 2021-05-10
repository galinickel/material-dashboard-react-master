import { httpService } from "./http.service.js";
const SIGNUP_URL = "auth/signup";
export const userService = {
  signup
};

function signup(user) {
  console.log(user, "from user service");
  httpService.post(SIGNUP_URL, user);
  return Promise.resolve(user);
}
