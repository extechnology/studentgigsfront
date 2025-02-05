import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    GetUserPersonalInfo, EditUserPersonalInfo, GetUserEducationInfo, AddUserEducationInfo,
    DeleteUserEducationInfo, GetUserLanguageInfo, AddUserLanguageInfo, DeleteUserLanguageInfo,
    GetUserTechSkills, AddUserTechSkills, DeleteUserTechSkills, GetUserSoftSkills, AddUserSoftSkills,
    DeleteUserSoftSkills, EditUserWorkPerference, GetUserWorkPerference, GetUserJobCategory, AddUserJobCategory,
    DeleteUserJobCategory, GetUserProfilePicture, EditUserProfilePicture
} from "@/Service/AllApi";





// Get User Personal Information
export const GetPersonalInfo = () => {

    return useQuery({

        queryKey: ["userpersonalinfo"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserPersonalInfo(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}





// Edit User Personal Information
export const EditPersonalInfo = () => {

    interface MutationParams {
        formData: FormData;
        id: string;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData, id }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await EditUserPersonalInfo(formData, headers, id)

                return Response

            } catch (err) {

                console.log(err);

            }


        },

        onError: (error) => {
            console.error("Failed to add client data:", error);
        },

        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userpersonalinfo"] });
            queryclient.invalidateQueries({ queryKey: ["userprofilepicture"] });

        }

    })

}






// Get User Education Information
export const GetEducationInfo = () => {

    return useQuery({

        queryKey: ["usereducationinfo"],
        initialData: [],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserEducationInfo(headers)

                return Response.data

            }
            catch (err) {

                console.log(err);

            }

        },

    })

}


// Add User Education Information
export const AddEducationInfo = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserEducationInfo(formData, headers)

                return Response


            } catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to add client data:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usereducationinfo"] });

        }

    })

}






// Delete User Education Information
export const DeleteEducationInfo = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: string) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteUserEducationInfo(id, headers)

                return Response

            }
            catch (err) {

                console.log(err);
            }

        },

        onError: (error) => {
            console.error("Failed to Delete Education:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usereducationinfo"] });

        }

    })

}




// Get User Language Information
export const GetLanguageInfo = () => {

    return useQuery({

        queryKey: ["userlanguageinfo"],
        initialData: [],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserLanguageInfo(headers)

                return Response.data

            }
            catch (err) {

                console.log(err);

            }

        },

    })

}





// Add User Language Information
export const AddLanguageInfo = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserLanguageInfo(formData, headers)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to add  Language:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userlanguageinfo"] });

        }

    })

}




// Delete User Language Information
export const DeleteLanguageInfo = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: string) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteUserLanguageInfo(id, headers)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to Delete Language:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userlanguageinfo"] });

        }

    })

}




// Get User Tech Skills
export const GetTechSkills = () => {

    return useQuery({

        queryKey: ["usertechskills"],
        initialData: [],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserTechSkills(headers)

                return Response.data

            }
            catch (err) {

                console.log(err);

            }

        },

    })

}





// Add User Tech Skills
export const AddTechSkills = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserTechSkills(formData, headers)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to  a Skill:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usertechskills"] });

        }

    })

}




// Delete User Tech Skills
export const DeleteTechSkills = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: string) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteUserTechSkills(id, headers)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to Delete a Skill:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usertechskills"] });

        }

    })

}






// Get User Soft Skills
export const GetSoftSkills = () => {

    return useQuery({

        queryKey: ["usersoftskills"],
        initialData: [],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserSoftSkills(headers)

                return Response.data

            }
            catch (err) {

                console.log(err);

            }

        },

    })

}





// Add User Soft Skills
export const AddSoftSkill = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserSoftSkills(formData, headers)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to  a Skill:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usersoftskills"] });

        }

    })

}




// Delete User Soft Skills
export const DeleteSoftSkills = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: string) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteUserSoftSkills(id, headers)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to Delete a Skill:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usersoftskills"] });

        }

    })

}







// Get User Work Preferences
export const GetWorkPerference = () => {

    return useQuery({

        queryKey: ["userworkperference"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserWorkPerference(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}





// Edit User Work Preferences
export const EditWorkPerference = () => {

    interface MutationParams {
        formData: FormData;
        id: string;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData, id }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await EditUserWorkPerference(formData, headers, id)

                return Response

            } catch (err) {

                console.log(err);

            }


        },

        onError: (error) => {
            console.error("Failed to Edit Work Perference:", error);
        },

        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userworkperference"] });

        }

    })

}










// Get User  Preferred Categories
export const GetPreferredCategories = () => {

    return useQuery({

        queryKey: ["userpreferredcategories"],
        initialData: [],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserJobCategory(headers)

                return Response.data

            }
            catch (err) {

                console.log(err);

            }

        },

    })

}





// Add User Preferred Categories
export const AddPreferredCategory = () => {

    interface MutationParams {
        formData: FormData;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await AddUserJobCategory(formData, headers)

                return Response

            }
            catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to add Job Category:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userpreferredcategories"] });

        }

    })

}




// Delete User Preferred Categories
export const DeletePreferredCategory = () => {

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async (id: string) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await DeleteUserJobCategory(id, headers)

                return Response

            } catch (err) {

                console.log(err);

            }

        },

        onError: (error) => {
            console.error("Failed to Delete a Job Category:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userpreferredcategories"] });

        }

    })

}







// Get User Profile pic
export const GetProfilePicture = () => {

    return useQuery({

        queryKey: ["userprofilepicture"],
        initialData: [],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                if (!token) {
                    throw new Error("Authentication token not found");
                }

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetUserProfilePicture(headers)

                return Response.data


            } catch (err) {

                console.log(err);


            }
        },

    })

}





// Edit User Profile pic
export const EditProfilePicture = () => {

    interface MutationParams {
        formData: FormData;
        id: string;
    }

    const queryclient = useQueryClient();

    return useMutation({

        mutationFn: async ({ formData, id }: MutationParams) => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await EditUserProfilePicture(formData, headers, id)

                return Response

            } catch (err) {

                console.log(err);

            }


        },

        onError: (error) => {
            console.error("Failed to Edit Profile Picture:", error);
        },

        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userprofilepicture"] });
          

        }

    })

}
