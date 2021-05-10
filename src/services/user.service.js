import { httpService } from "./http.service.js";
const SIGNUP_URL = "auth/signup";
const LOGIN_URL = "auth/login";
export const userService = {
  signup,
  login
};

function signup(user) {
  try {
    httpService.post(SIGNUP_URL, user);
    return Promise.resolve(user);
  } catch (err) {
    console.log(err);
  }
}

function login(user) {
  try {
    httpService.post(LOGIN_URL, user);
    return Promise.resolve(user);
  } catch (err) {
    console.log(err);
  }
}
