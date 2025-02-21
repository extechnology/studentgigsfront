import { useQuery } from "@tanstack/react-query";
import { GetUniversityList, GetFeildOfStudy, GetJobList, GetHomeSlider, GetLocations } from "@/Service/AllApi";




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






// Get job category
export const JObList = () => {

    return useQuery({

        queryKey: ["joblist"],

        queryFn: async () => {

            try {

                const Response = await GetJobList()

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




// Get All Locations
export const AllLocations = (search: string) => {

    return useQuery({

        queryKey: ["AllLocations", search],

        queryFn: async () => {

            try {

                const response = await GetLocations(search);

                return response.data.features.map((location: any) => {

                    const properties = location.properties;
                    const coordinates = location.geometry.coordinates;

                    const city = properties.city || properties.name || "";
                    const state = properties.state || "";
                    const country = properties.country || "";
                    const postalCode = properties.postcode || ""; // Fetching postal code

                    return {
                        value: `${coordinates[1]},${coordinates[0]}`, // lat,lng format
                        label: [city, state, country, postalCode].filter(Boolean).join(", "), // Removing empty values
                    };

                });


            } catch (err) {
                console.error("Error fetching locations:", err);
                return [];
            }
        },
    });
};


