import { useQuery } from "@tanstack/react-query";
import { GetUniversityList } from "@/Service/AllApi";



export const UniversityList = (search:string) => {

    return useQuery({

        queryKey: ["universitylist" , search],

        queryFn: async () => {

            const Response = await GetUniversityList(search)

            return Response?.data?.map((uni:any) => ({ value: uni.name, label: uni.name })) || [];

        },
        staleTime: 1000 * 60 * 10, 
        enabled: !!search

    })

}
