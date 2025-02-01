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


//GET University List
export const GetUniversityList = async (search: string) => {

    const params = new URLSearchParams({ name: search })

    return await CommonApi("GET", `http://universities.hipolabs.com/search?${params.toString()}`, "", "")

}



//GET User Personal Information
export const GetUserPersonalInfo = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employees/`, "", header)

}



// Edit User Personal Information
export const EditUserPersonalInfo = async (data: any, header: object, id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employees/?${params.toString()}`, data, header)

}


//GET User Education Information
export const GetUserEducationInfo = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-education/`, "", header)

}



// Edit User Education Information
export const AddUserEducationInfo = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-education/`, data, header)

}



// Edit User Education Information
export const DeleteUserEducationInfo = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-education/?${params.toString()}`, "", header)

}