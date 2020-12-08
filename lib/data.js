import axios from "axios";

export const getAllCars = async () => {
  const data = (await axios.get("https://mvp-solo-staging.herokuapp.com/api/cars")).data;
  return data;
}

export const getSortedCars = async (order) => {
  const data = (await axios.get(`https://mvp-solo-staging.herokuapp.com/api/cars/${order}`)).data;
  return data;
}

export const getMakers = async () => {
  const data = (await axios.get("https://mvp-solo-staging.herokuapp.com/api/makers")).data;
  return data;
}

export const getSelectedMakers = async (makers) => {
  const data = (await axios.get(`https://mvp-solo-staging.herokuapp.com/api/cars/selected/${makers}`)).data;
  return data;
}