import { useState, useEffect, Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Contact, Crown, GraduationCap, House, KeyRound, LogOut, Search, Settings, Telescope, Text, User } from 'lucide-react';
import {
  Dialog,
  Disclosure,
  PopoverGroup,
  Transition
} from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import ProfileMenu from "./ProfileMenu";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import toast from "react-hot-toast";
import { useAuth } from "@/Context/AuthContext";
import { GetPersonalInfo } from "@/Hooks/UserProfile";
import { useQueryClient } from "@tanstack/react-query";
import NotificationPopover from "@/Components/Common/Notifications";


export default function Header() {


  // for navigation
  const Navigate = useNavigate()


  // Get User Personal Information
  const { data } = GetPersonalInfo()


  // To check if the user is scrolled
  const [scrolled, setScrolled] = useState(false);



  // To open and close the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  // To Set the text color
  const [color, setcolor] = useState(false);



  // To get the current path
  const location = useLocation();


  // To use auth context logout
  const { logout, isAuthenticated, isPlanExpired, plan } = useAuth()



  // Add a scroll event listener
  useEffect(() => {

    setcolor(location.pathname === "/employerlist" || location.pathname.startsWith("/employerdeatils/") || location.pathname === "/jobfilter" || location.pathname.startsWith("/jobdeatils") || location.pathname === "/" || location.pathname === "/findgigs" ? true : false)

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
        setcolor(false)

      } else {
        setScrolled(false);
        setcolor(location.pathname === "/employerlist" || location.pathname.startsWith("/employerdeatils/") || location.pathname.startsWith("/jobdeatils") || location.pathname === "/jobfilter" || location.pathname === "/" || location.pathname === "/findgigs" ? true : false)
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, [location]);



  // To use query client
  const queryClient = useQueryClient()


  // Logout
  const HandleLogOut = () => {

    logout()

    queryClient.invalidateQueries({ queryKey: ["userpersonalinfo"] });

    toast.success("Logout Successful...!")

    Navigate("/")

  }


  return (



    <>

      <main className={` z-50 fixed top-0 left-0 w-full transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}>

        <header className="">

          <nav aria-label="Global" className="mx-auto flex flex-col sm:flex-row max-w-7xl items-center justify-between sm:p-0 sm:py-0 px-2 py-1 lg:px-0 md:px-8">


            <div className="flex items-center justify-between">



              <div className="flex lg:flex-1">
                <Link to={'/'} className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="nav-icon"
                    src="./Nav-Icon.png"
                    loading="lazy"
                    className="sm:h-20 sm:w-52 h-12 w-32"
                  />
                </Link>
              </div>




              {/* Home for mobile view */}
              <Link to={'/'} className={`ms-1 text-md font-semibold text-gray-400 hover:text-green-600 sm:hidden block ${color ? "text-white" : ""}`}>
                <House size={24} />
              </Link>



              {/* Search  for mobile view */}
              <div className="flex items-center border rounded-full px-1 overflow-hidden  sm:hidden mx-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-2 py-1 text-xs focus:outline-none  ${color ? 'bg-transparent text-white placeholder-white' : 'text-gray-900'}`}
                />
                <Link
                  to={'/search'}
                  className={`p-2 flex items-center justify-center ${color ? 'bg-transparent hover:bg-gray-600' : ""} text-md font-semibold`}
                >
                  <Search size={16} className={`${color ? 'text-white' : 'text-gray-400'}`} />

                </Link>
              </div>



              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ${color ? "text-white" : "text-black"}`}
                >
                  <span className="sr-only">Open main menu</span>

                  <Text aria-hidden="true" className="size-6" />

                </button>

              </div>


            </div>



            {/* Buttons */}
            <div className='flex justify-center items-center gap-x-1 mb-2 sm:hidden'>

              {/* Find Student Talents for mobile view */}
              <a href={'https://gigs.studentsgigs.com'} target="_blank">

                <button className={`bg-[#eb8125] text-white font-semibold text-xs px-5 py-2 flex items-center sm:hidden`}>
                  <GraduationCap size={16} /> Find Student Talents
                </button>

              </a>

              {/* Explore Gigs */}
              <Link to={'/jobfilter'}>

                <button className={` flex items-center gap-x-2 bg-[#004673] ms-2 text-white font-semibold text-xs px-5 py-2  sm:hidden`}>
                  Explore Gigs <Telescope size={16} />
                </button>

              </Link>

            </div>


            {/* Navbar items */}
            <PopoverGroup className="hidden lg:flex lg:gap-x-4 items-center">


              {/* Explore Gigs */}
              <Link to={'/jobfilter'}>

                <button className={` flex items-center gap-x-2 bg-[#004673] ms-2 text-white font-semibold text-md px-16 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Explore Gigs <Telescope size={24} />
                </button>

              </Link>


              {/* Find Student Talents */}
              <a href={'https://gigs.studentsgigs.com'} target="_blank">

                <button className={`flex items-center gap-x-2 bg-[#eb8125] text-white font-semibold text-md px-12 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Find Student Talents <GraduationCap size={24} />
                </button>

              </ a>


              {/* Home */}
              <Link to={'/'} className={`text-md font-semibold text-gray-400 hover:text-green-600 ${color ? "text-white" : ""}`}>
                <House size={30} />
              </Link>



              {/* Profile menu items */}
              <ProfileMenu HandleLogOut={HandleLogOut} LoginStatus={isAuthenticated} data={data} />


              {/* Notifications */}
              <NotificationPopover color={color} isAuthenticated={isAuthenticated} isPlanExpired={isPlanExpired} plan={plan} />


              {/* Search */}
              <div className="flex items-center border rounded-full px-2 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 text-md focus:outline-none  ${color ? 'bg-transparent text-white placeholder-white' : 'text-gray-900 bg-transparent'}`}
                />
                <Link
                  to={'/jobfilter'}
                  className={`p-2 flex items-center justify-center ${color ? 'bg-transparent' : ""} text-md font-semibold`}
                >
                  <Search className={`${color ? 'text-white' : 'text-gray-400'}`} />
                </Link>
              </div>


            </PopoverGroup>


          </nav>








          {/* Mobile Nav sidebar */}
          <Transition show={mobileMenuOpen} as={Fragment}>

            <Dialog onClose={setMobileMenuOpen} className="lg:hidden relative z-50">


              {/* Backdrop */}
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
              </Transition.Child>


              {/* Sliding panel */}
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >


                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                  {/* Logo Section */}
                  <div className="flex items-center justify-between">


                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt="nav-icon"
                        src="./Nav-Icon.png"
                        loading="lazy"
                        className="h-16 w-auto"
                      />
                    </a>

                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-all duration-200"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="size-8" />
                    </button>


                  </div>



                  {/* Menu Content */}
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-200 delay-75"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >

                    <div className="mt-6 flow-root">


                      <div className="-my-6 divide-y divide-gray-500/10">


                        <div className="space-y-2 py-6">


                          {/* Menu Dropdown */}
                          <Disclosure as="div" className="-mx-3">

                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  className="flex w-full items-center justify-between px-3 py-5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                                >
                                  <span>Menu</span>
                                  <ChevronDownIcon
                                    className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''
                                      }`}
                                  />
                                </Disclosure.Button>

                                <Disclosure.Panel className="mt-2 space-y-1">


                                  {/* Profile */}
                                  <Link
                                    to="/userprofile"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <User className="h-5 w-5" />
                                      <span>Profile</span>
                                    </div>
                                  </Link>



                                  {/* Settings */}
                                  <Link
                                    to="/settings"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <Settings className="h-5 w-5" />
                                      <span>Settings</span>
                                    </div>
                                  </Link>


                                  {/* Premium */}
                                  <Link
                                    to="/plans"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                  >
                                    <div className="flex items-center space-x-2">
                                      <Crown className="h-5 w-5" />
                                      <span>Premium</span>
                                    </div>
                                  </Link>

                                  {/* Login/Logout */}
                                  {!isAuthenticated ? (
                                    <Link
                                      to="/auth"
                                      className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <KeyRound className="h-5 w-5" />
                                        <span>Login</span>
                                      </div>
                                    </Link>
                                  ) : (
                                    <button
                                      onClick={HandleLogOut}
                                      className="w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <LogOut className="h-5 w-5" />
                                        <span>Logout</span>
                                      </div>
                                    </button>
                                  )}


                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>



                          {/* Search Gigs */}
                          <Link
                            to="/jobfilter"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <Telescope className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Search Gig Jobs</span>
                          </Link>



                          {/* Find Student Talents */}
                          <a
                            href={'https://gigs.studentsgigs.com'}
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <GraduationCap className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Find Student Talents</span>
                          </a>


                          {/* Contact */}
                          <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <Contact className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Contact</span>
                          </Link>


                          {/* Companies */}
                          {/* <Link
                            to="/employerlist"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <Building className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Companies</span>
                          </Link> */}


                        </div>
                      </div>
                    </div>


                  </Transition.Child>


                </Dialog.Panel>


              </Transition.Child>


            </Dialog>


          </Transition>


        </header>


      </main>

    </>



  )
}
