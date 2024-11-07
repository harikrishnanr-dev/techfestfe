import { BASE_URL } from './baseUrl';
import { commonApi } from './commonApi';

// Register User API
export const registerApi = async (userDetails) => {
    return await commonApi("POST", `${BASE_URL}/user/register`, userDetails, "");
};
