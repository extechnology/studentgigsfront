import { useQuery } from "@tanstack/react-query"
import { GetJobs, GetEmployeer, GetSearchedJobs } from "@/Service/AllApi";
import { useAuth } from "@/Context/AuthContext";




// Get Posted Jobs
export const PostedJobList = () => {

    return useQuery({

        queryKey: ["postedJobs"], 
        queryFn: async () => {

            try {

                const response = await GetJobs();
                return response.data; 

            } catch (err) {

                console.error("Error fetching jobs:", err);
                throw new Error("Failed to fetch jobs"); 

            }
        },

        staleTime: 1000 * 60 * 10,

    });

}




// Get Employeer
export const Employeers = () => {

    return useQuery({

        queryKey: ["employeer"],

        queryFn: async () => {

            try {

                const Response = await GetEmployeer()

                return Response.data

            } catch (err) {

                console.log(err);
                return [];

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}




interface GetParams {

    category: string
    location: string
    salary_type: string
    page: number
}

// Get Searched Jobs
export const SerachedJobs = ({ category, location, salary_type , page }: GetParams) => {

    const { isAuthenticated } = useAuth()

    return useQuery({

        queryKey: ["serachedjobs", category, location, salary_type , page],

        queryFn: async () => {

            try {

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetSearchedJobs(category, location, salary_type, headers , isAuthenticated , page)

                return Response.data

            } catch (err) {

                console.error("Error fetching searched jobs:", err);
                return [];

            }

        },

    })

}