import Hero from "@/Components/Home/Hero";
import TrendingJobs from "@/Components/Home/TrendingJobs";
import PopluarJobs from "@/Components/Home/PopluarJobs";
import About from "@/Components/Home/About";
import { useGoogleOneTapLogin, CredentialResponse } from '@react-oauth/google';
import { useAuth } from "@/Context/AuthContext";
import { GoogleAuth } from "@/Hooks/UserLogin";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Landing() {


  // Google AUTH
  const { mutate: mutateGoogleLogin } = GoogleAuth();



  // Context auth
  const { login, isAuthenticated } = useAuth();



  // Scroll to top when page is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);




  //Only call the hook at the top level
  useGoogleOneTapLogin({

    onSuccess: async (credentialResponse: CredentialResponse) => {

      if (isAuthenticated) return; 

      try {


        if (!credentialResponse.credential) {
          toast.error("Login failed - no credentials received");
          return;
        }


        const token = credentialResponse.credential;
        const tokenParts = token.split(".");


        if (tokenParts.length !== 3) {
          toast.error("Invalid token received");
          return;
        }


        const payload = JSON.parse(atob(tokenParts[1]));


        const formdata = new FormData();
        formdata.append("username", payload.name);
        formdata.append("email", payload.email);


        mutateGoogleLogin(formdata, {

          onSuccess: (response) => {

            if (response.status >= 200 && response.status <= 300) {

              login(response.data.access);
              toast.success("Login Successful!");

            } else {

              console.error("Login failed:", response);
              toast.error("Login failed. Please try again.");

            }

          },

          onError: (error) => {

            console.error("Login mutation error:", error);
            toast.error("Login failed. Please try again.");

          },

        })

      } catch (error) {

        console.error("One Tap login error:", error);
        toast.error("Login failed. Please try again.");

      }
    },
    onError: () => {

      console.error("Google One Tap login failed");
      toast.error("Google One Tap Login Failed. Please try again.")

    },
    
    cancel_on_tap_outside: false,
    prompt_parent_id: "oneTap",

  })

  return (

    <>

      <main className="w-full h-full">

        {/* Hero */}
        <div><Hero /></div>

        {/* Trending Jobs */}
        <div><TrendingJobs /></div>

        {/* Popluar Jobs */}
        <div><PopluarJobs /></div>

        {/* About */}
        <div><About /></div>

      </main>

      
    </>
  );
}
