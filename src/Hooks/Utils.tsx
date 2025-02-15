import { useQuery } from "@tanstack/react-query";
import { GetUniversityList, GetFeildOfStudy, GetJobList, GetHomeSlider } from "@/Service/AllApi";




// Get UniversityList
export const UniversityList = (search: string) => {

    return useQuery({

        queryKey: ["universitylist", search],

        queryFn: async () => {

            const Response = await GetUniversityList(search)

            return Response?.data?.map((uni: any) => ({ value: uni.name, label: uni.name })) || [];

        },
        staleTime: 1000 * 60 * 10,
        enabled: !!search

    })

}





// Get Feild of Study
export const FeildOfStudyList = () => {

    return useQuery({

        queryKey: ["feildofstudylist"],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetFeildOfStudy(headers)

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}






// Get Feild of Study
export const JObList = () => {

    return useQuery({

        queryKey: ["joblist"],

        queryFn: async () => {

            try {

                if (!localStorage.getItem("token")) { throw new Error("Authentication token not found"); }

                const token = localStorage.getItem("token")

                const headers = { Authorization: `Bearer ${token}` }

                const Response = await GetJobList(headers)

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },
        staleTime: 1000 * 60 * 10,

    })

}





// Get Home Slider
export const HomeSlider = () => {

    return useQuery({

        queryKey: ["HomeSlider"],

        queryFn: async () => {

            try {

                const Response = await GetHomeSlider()

                return Response.data

            } catch (err) {

                console.log(err);

            }

        },

    })

}