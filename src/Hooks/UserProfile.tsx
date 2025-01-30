import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { GetUserPersonalInfo, EditUserPersonalInfo } from "@/Service/AllApi";



// Get User Personal Information
export const GetPersonalInfo = () => {

    return useQuery({

        queryKey: ["userpersonalinfo"],

        queryFn: async () => {

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await GetUserPersonalInfo(headers)

            return Response.data

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