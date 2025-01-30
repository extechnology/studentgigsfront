import { CommonApi } from "./CommonApi";


const Base_Url = "https://server.studentsgigs.com/api/employee"


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


//GET User Profile Form
export const GetUserPersonalInfo = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employees/`, "", header)

}



// Add User Profile Form
export const EditUserPersonalInfo = async (data:any,header: object , id:any) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employees/?${params.toString()}`, data, header)

}

