import { CommonApi } from "./CommonApi";


const Base_Url = "http://localhost:8000"


// User Register
export const RegisterUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/employee/user/register/`, data, "")

}



// User Login
export const LoginUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/employee/api/token/`, data, "")

}



// Google Auth
export const GoogleLogin = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/employee/api/google-auth/`, data, "")

}