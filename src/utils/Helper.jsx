import {
  APP_API,
  APP_SETTING,
  TABLE_DATA,
  USER_LOGIN,
  USER_SESSION,
  REPORT_API,
} from "./config";
import axios from "axios";

/*
 * function for the header image
 *
 */

export const headerImage = async () => {
  try {
    const url = `${APP_API}${APP_SETTING}`;
    const response = await axios.get(url);
    return response.data || [];
  } catch (error) {
    console.error(error);
  }
};

/*
 * login function
 *
 */

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${APP_API}${USER_LOGIN}`, {
      username: email,
      password: password,
    });
    return response.data || [];
  } catch (error) {
    alert("wrong crendentials");
  }
};

/*
 * Table data
 *
 */

export const tableData = async () => {
  try {
    const url = `${APP_API}${TABLE_DATA}`;

    const response = await axios.get(url);

    return response || [];
  } catch (error) {
    console.error(error);
  }
};

/*
 * Table data
 *
 */

export const userSession = async () => {
  try {
    const url = `${APP_API}${USER_SESSION}`;

    const response = await axios.get(url);
    return response || [];
  } catch (error) {
    console.log(error);
  }
};

/*
 * Report data
 *
 */

export const reportPostApi = async (number, jsonObj) => {
  try {
    const response = await axios.post(`${APP_API}${REPORT_API}`, {
      number_value: number,
      jpgFILE: jsonObj,
    });
    return response || [];
  } catch (error) {
    console.error(error);
  }
};
