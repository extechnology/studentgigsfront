import { lazy, Suspense, useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuth } from "./Context/AuthContext.tsx"
import ProtectedRouteForSavedJobs from "./Components/Common/ProtectedRouteForSavedJobs.tsx"


const Landing = lazy(() => import("./Pages/Landing.tsx"))
const Loader = lazy(() => import("./Components/Loaders/Loader.tsx"))
const Header = lazy(() => import("./Components/Common/Header.tsx"))
const Footer = lazy(() => import("./Components/Common/Footer.tsx"))
const Contact = lazy(() => import("./Pages/Contact.tsx"))
const UserProfile = lazy(() => import("./Pages/UserProfile.tsx"))
// const EmployerList = lazy(() => import("./Pages/EmployerList.tsx"))
const EmployerDeatils = lazy(() => import("./Pages/EmployerDeatils.tsx"))
const Settings = lazy(() => import("./Pages/Settings.tsx"))
const NotFound = lazy(() => import("./Pages/NotFound.tsx"))
const Auth = lazy(() => import("./Pages/Auth.tsx"))
const JobFilter = lazy(() => import("./Pages/JobFilter.tsx"))
const JobDeatils = lazy(() => import("./Pages/JobDeatils.tsx"))
const ApplyJob = lazy(() => import("./Pages/ApplyJob.tsx"))
const JobApplySucces = lazy(()=> import ("./Pages/JobApplySuccess.tsx"))
const SavedJobs = lazy(() => import("./Pages/SavedJobs.tsx"))
const GigsAcademy = lazy(() => import("./Pages/GigsAcademy.tsx"))
const Plans = lazy(() => import("./Pages/Plans.tsx"))
const Terms = lazy(() => import("./Pages/Terms.tsx"))
const LoginTerms = lazy(() => import("./Pages/LoginTerms.tsx"))
const Refund = lazy(() => import("./Pages/Refund.tsx"))
const Privacy = lazy(() => import("./Pages/Privacy.tsx"))




function App() {



  // To get the current path
  const location = useLocation()


  // To check if the user is authenticated
  const { isAuthenticated } = useAuth()



  // To hide the header and footer
  const [Hide, SetHide] = useState(false)




  // To hide the header and footer
  useEffect(() => {

    if (location.pathname === "/auth") {
      SetHide(true)
    }
    else {

      SetHide(false)

    }

  }, [location])




  // Protected Route Component for Auth
  const ProtectedRoute = ({ children }: any) => {

    return isAuthenticated ? children : <Navigate to="/auth" state={{ from: location }} />

  };




  return (


    <>

      <Suspense fallback={<Loader />}>

        {!Hide && <Header />}

        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/jobfilter" element={<JobFilter />} />

          <Route path="/gigsskillacademy" element={<GigsAcademy />} />

          <Route path="/termscondition" element={<Terms />} />

          <Route path="/refundpolicy" element={<Refund />} />

          <Route path="/privacypolicy" element={<Privacy />} />

          <Route path="/loginterms" element={<LoginTerms />} />

          {/* <Route path="/employerlist" element={<EmployerList />} /> */}

          <Route path="/savedjobs" element={<ProtectedRouteForSavedJobs><SavedJobs /></ProtectedRouteForSavedJobs>} />

          <Route path="/plans" element={<ProtectedRoute> <Plans /> </ProtectedRoute>} />

          <Route path="/jobapplysuccess" element={<ProtectedRoute> <JobApplySucces /> </ProtectedRoute>} />

          <Route path="/userprofile" element={<ProtectedRoute> <UserProfile /> </ProtectedRoute>} />

          <Route path="/employerdeatils/:id" element={<ProtectedRoute> <EmployerDeatils /> </ProtectedRoute>} />

          <Route path="/settings" element={<ProtectedRoute> <Settings /> </ProtectedRoute>} />

          <Route path="/applyjob/:id/:jobType" element={<ProtectedRoute> <ApplyJob /> </ProtectedRoute>} />

          <Route path="/jobdeatils/:id/:jobType" element={<ProtectedRoute> <JobDeatils /> </ProtectedRoute>} />

        </Routes>

        {!Hide && <Footer />}

        <Toaster position="top-center" />

      </Suspense>


    </>

  )



}

export default App
