import { CommonApi } from "./CommonApi";


const Base_Url = "http://localhost:8000/api/employee"


// User Register
export const RegisterUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/user/register/`, data, "")

}


// User Login
export const LoginUser = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/token/`, data, "")

}


// Google Auth
export const GoogleLogin = async (data: any) => {

    return await CommonApi("POST", `${Base_Url}/api/google-auth/`, data, "")

}


// User Profile Form
export const ProfileForm = async (header:object) => {

    return await CommonApi("GET", `${Base_Url}/form-model/`,"", header)

}

