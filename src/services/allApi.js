import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonApi";

// Register API
export const registerApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user/register`, userDetails);
};

// Login API
export const loginApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user/login`, userDetails);
};

// Get Events API
export const getEventApi = async () => {
    return await commonApi("GET", `${BASE_URL}/events`);
};

// Post Event API
export const createEventApi = async (eventDetails, reqHeader) => {
    return await commonApi("POST", `${BASE_URL}/events`, eventDetails, reqHeader);
};
