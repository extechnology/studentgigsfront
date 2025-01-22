import { useQuery } from "@tanstack/react-query";
import { ProfileForm } from "@/Service/AllApi";



export const UserFormModel = () => {

    return useQuery({

        queryKey: ["form-model"],

        queryFn: async () => {

            const token = localStorage.getItem("token")

            const headers = { Authorization: `Bearer ${token}` }

            const Response = await ProfileForm(headers)

            return Response

        },

    })

}