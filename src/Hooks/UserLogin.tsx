import { useMutation } from "@tanstack/react-query"
import { RegisterUser , LoginUser} from "@/Service/AllApi"



// Register User 
export const UserRegister = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            const Response = await RegisterUser(data)

            return Response
        },

    })

}



// Login User 
export const UserLogin = () => {

    return useMutation({

        mutationFn: async (data: any) => {

            const Response = await LoginUser(data)

            return Response
        },

    })

}