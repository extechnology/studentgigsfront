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


//GET University List
export const GetUniversityList = async (search: string) => {

    const params = new URLSearchParams({ name: search })

    return await CommonApi("GET", `${Base_Url}/university/?${params.toString()}`, "", "")

}



//GET Feild of Study List
export const GetFeildOfStudy = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-field-of-study/`, "", header)

}





//GET Job List 
export const GetJobList = async () => {

    return await CommonApi("GET", `${Base_Url}/employee-job-category/`, "", "")

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



// Add User Education Information
export const AddUserEducationInfo = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-education/`, data, header)

}



// Delete User Education Information
export const DeleteUserEducationInfo = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-education/?${params.toString()}`, "", header)

}



//GET User Language Information
export const GetUserLanguageInfo = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-languages/`, "", header)

}



// Add User Language Information
export const AddUserLanguageInfo = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-languages/`, data, header)

}


// Delete User Language Information
export const DeleteUserLanguageInfo = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-languages/?${params.toString()}`, "", header)

}



//GET User Tech Skills
export const GetUserTechSkills = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-technical-skills/`, "", header)

}



// Add User Tech skills
export const AddUserTechSkills = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-technical-skills/`, data, header)

}



// Delete User Tech skills
export const DeleteUserTechSkills = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-technical-skills/?${params.toString()}`, "", header)

}



//GET User Soft Skills
export const GetUserSoftSkills = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-soft-skills/`, "", header)

}



// Add User Soft Skills
export const AddUserSoftSkills = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-soft-skills/`, data, header)

}



// Delete User Soft Skills
export const DeleteUserSoftSkills = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-soft-skills/?${params.toString()}`, "", header)

}




//GET User Work Preferences
export const GetUserWorkPerference = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-work-preferences/`, "", header)

}



// Edit User Work Preferences
export const EditUserWorkPerference = async (data: any, header: object, id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employee-work-preferences/?${params.toString()}`, data, header)

}




//GET User Job Category
export const GetUserJobCategory = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-preferred-job-category/`, "", header)

}



// Add User Job Category
export const AddUserJobCategory = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-preferred-job-category/`, data, header)

}



// Delete User Job Category
export const DeleteUserJobCategory = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-preferred-job-category/?${params.toString()}`, "", header)

}




//GET User Profile picture
export const GetUserProfilePicture = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-profile-photos/`, "", header)

}



// Edit User Profile picture
export const EditUserProfilePicture = async (data: any, header: object, id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employee-profile-photos/?${params.toString()}`, data, header)

}






//GET User Experience
export const GetUserExperience = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-experience/`, "", header)

}



// Add User EXperience
export const AddUserExperience = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/employee-experience/`, data, header)

}



// Delete User EXperience
export const DeleteUserExperience = async (id: string, header: object) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("DELETE", `${Base_Url}/employee-experience/?${params.toString()}`, "", header)

}





//GET User Additional Information
export const GetUserAdditionalInfo = async (header: object) => {

    return await CommonApi("GET", `${Base_Url}/employee-additional-information/`, "", header)

}



// Edit User Additional Information
export const EditUserAdditionalInfo = async (data: any, header: object, id: string) => {

    const params = new URLSearchParams({ pk: id })

    return await CommonApi("PUT", `${Base_Url}/employee-additional-information/?${params.toString()}`, data, header)

}



// Get Home Slider
export const GetHomeSlider = async () => {

    return await CommonApi("GET", `${Base_Url}/home-slider-employee/`, "", "")

}


//GET Jobs
export const GetJobs = async (id: string, job_type: string, header: object) => {

    const params = new URLSearchParams({ id: id, job_type: job_type })

    return await CommonApi("GET", `${Base_Url}/jobs-indication/?${params.toString()}`, "", header)

}



//GET Employeer
export const GetEmployeer = async () => {

    return await CommonApi("GET", `${Base_Url}/employers/`, "", "")

}




//GET Locations
export const GetLocations = async (search: string) => {

    const params = new URLSearchParams({ query: search })

    return await CommonApi("GET", `${Base_Url}/locations/?${params.toString()}`, "", "")

}



//Search Jobs
export const GetSearchedJobs = async (category: string, location: string, salary_type: string, header: object, isAuthenticated: boolean, page: number) => {


    const params = new URLSearchParams({ category: category, location: location, salary_type: salary_type, page: page.toString() })

    if (isAuthenticated) {

        return await CommonApi("GET", `${Base_Url}/job-search/?${params.toString()}`, "", header)

    }

    return await CommonApi("GET", `${Base_Url}/job-search/?${params.toString()}`, "", "")

}



// Appply Job
export const PostApplyJob = async (data: FormData, header: object) => {

    return await CommonApi("POST", `${Base_Url}/job-application/`, data, header)

}



//GET Poplar Jobs
export const GetPopularJobs = async () => {

    return await CommonApi("GET", `${Base_Url}/popular-jobs/`, "", "")

}


//GET Trending Jobs
export const GetTrendingJobs = async () => {

    return await CommonApi("GET", `${Base_Url}/trending-job-slider/`, "", "")

}