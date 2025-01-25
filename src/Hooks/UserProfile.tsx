import { useQuery } from "@tanstack/react-query";
import { GetProfileForm } from "@/Service/AllApi";



export const GetUserProfile = () => {

    return useQuery({

        queryKey: ["userprofile"],

        queryFn: async () => {

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await GetProfileForm(headers)

            return Response

        },

    })

}