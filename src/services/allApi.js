import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonApi"
//register API
export const registerApi = async (userDetails) => {
    return await commonApi("POST",`${BASE_URL}/user/register`,userDetails,"")
}

//login Api

export const loginApi = async (userDetails) => {
    return await commonApi('POST',`${BASE_URL}/user/login`,userDetails,"")
    
}


export const getEventApi = async () => {
    return await commonApi('GET',`${BASE_URL}/events`,"","")
}