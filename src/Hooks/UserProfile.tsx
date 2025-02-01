import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetUserPersonalInfo, EditUserPersonalInfo, GetUserEducationInfo , AddUserEducationInfo , DeleteUserEducationInfo } from "@/Service/AllApi";




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

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await EditUserPersonalInfo(formData, headers, id)

            return Response

        },

        onError: (error) => {
            console.error("Failed to add client data:", error);
        },

        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["userpersonalinfo"] });

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

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await AddUserEducationInfo(formData, headers)

            return Response

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

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await DeleteUserEducationInfo(id, headers)

            return Response

        },

        onError: (error) => {
            console.error("Failed to add client data:", error);
        },
        onSuccess: () => {

            queryclient.invalidateQueries({ queryKey: ["usereducationinfo"] });

        }

    })

}