import { useQuery } from "@tanstack/react-query"
import { GetJobs } from "@/Service/AllApi";




// Get Feild of Study
export const PostedJobList = () => {

    return useQuery({

        queryKey: ["job"],

        queryFn: async () => {

            try {

                const Response = await GetJobs()

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,
        refetchInterval: 60000,

    })

}