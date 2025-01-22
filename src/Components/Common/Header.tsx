import { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Building, CircleUserRound, Contact, GraduationCap, House, KeyRound, LogOut, Search, Settings, Telescope, Text, User } from 'lucide-react';
import {
  Dialog,
  Disclosure,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import toast from "react-hot-toast";


export default function Header() {


  // Set Login and logout status
  const [LoginStatus, SetLoginStatus] = useState(false)



  // To check if the user is scrolled
  const [scrolled, setScrolled] = useState(false);



  // To open and close the mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  // To Set the text color
  const [color, setcolor] = useState(false);



  // To get the current path
  const location = useLocation();




  // Add a scroll event listener
  useEffect(() => {

    setcolor(location.pathname === "/employerlist" || location.pathname === "/employerdeatils" || location.pathname === "/jobfilter" || location.pathname === "/jobdeatils" ? true : false)

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
        setcolor(false)

      } else {
        setScrolled(false);
        setcolor(location.pathname === "/employerlist" || location.pathname === "/employerdeatils" || location.pathname === "/jobfilter" || location.pathname === "/jobdeatils" ? true : false)
      }

    };

    const handleCheck = () => {

      if (!localStorage.getItem("token")) {

        SetLoginStatus(true)

      } else {

        SetLoginStatus(false)

      }

    }

    handleCheck()

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, [location]);



  // Logout
  const HandleLogOut = () => {

    localStorage.removeItem("token");
    toast.success("Logout Successful...!")
    SetLoginStatus(true)

  }


  return (



    <>

      <main className={` z-10 fixed top-0 left-0 w-full transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}>



        <header className="">

          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between sm:p-0 sm:py-0 px-2 py-1 lg:px-8">

            <div className="flex lg:flex-1">
              <Link to={'/'} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="nav-icon"
                  src="/Nav-Logo.png"
                  loading="lazy"
                  className="sm:h-24 sm:w-56 h-16 w-36"
                />
              </Link>
            </div>


            {/* Find Student Talents for mobile view */}
            <Link to={'/'}>

              <button className={`bg-orange-500 text-white font-semibold text-xs px-2 py-2 flex items-center gap-x-2 sm:hidden`}>
                <GraduationCap size={16} /> Find Student Talents
              </button>

            </Link>


            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ${color ? "text-white" : ""}`}
              >
                <span className="sr-only">Open main menu</span>

                <Text aria-hidden="true" className="size-6" />

              </button>

            </div>



            {/* Navbar items */}
            <PopoverGroup className="hidden lg:flex lg:gap-x-4 items-center">


              {/* Explore Gigs */}
              <Link to={'/jobfilter'}>

                <button className={` flex items-center gap-x-2 bg-blue-500 ms-2 text-white font-semibold text-md px-16 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Explore Gigs <Telescope size={24} />
                </button>

              </Link>


              {/* Find Student Talents */}
              <Link to={'/'}>

                <button className={`flex items-center gap-x-2 bg-orange-500 text-white font-semibold text-md px-16 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Find Student Talents <GraduationCap size={24} />
                </button>

              </Link>


              {/* Home */}
              <Link to={'/'} className={`text-md font-semibold text-gray-400 hover:text-green-600 ${color ? "text-white" : ""}`}>
                <House size={30} />
              </Link>



              {/* Profile items */}
              <Popover className="relative">


                <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold text-gray-400 ${color ? "text-white" : ""}`}>

                  <CircleUserRound size={30} />

                </PopoverButton>


                <PopoverPanel
                  transition
                  className="absolute -left-32 top-8 z-10 mt-3 w-52 dropdown  rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >

                  <div className="p-4">


                    {/* {/* Profile */}
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100" >

                      <div className="flex-auto">

                        <Link to={'/userprofile'} className="font-semibold text-gray-900 flex items-center text-center">

                          <User size={20} className="me-2" />

                          Profile

                        </Link>


                      </div>

                    </div>



                    {/* Settings */}
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                      <div className="flex-auto">

                        <Link to={'/settings'} className="font-semibold text-gray-900 flex items-center">

                          <Settings size={20} className="me-2" />
                          Settings

                        </Link>

                      </div>

                    </div>




                    {/* Login Logout */}
                    {

                      LoginStatus ?



                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                          <div className="flex-auto">

                            <Link to={'/auth'} className="font-semibold text-gray-900 flex items-center">

                              <KeyRound size={20} className="me-2" />
                              Login

                            </Link>

                          </div>

                        </div>

                        :

                        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                          <div className="flex-auto">

                            <p className=" font-semibold text-gray-900 flex items-center cursor-pointer" onClick={HandleLogOut}>

                              <LogOut size={20} className="me-2" />
                              Logout
                            </p>

                          </div>

                        </div>

                    }

                  </div>

                </PopoverPanel>

              </Popover>



              {/* Search */}
              <div className="flex items-center border rounded-full px-2 overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 text-md focus:outline-none  ${color ? 'bg-transparent text-white' : 'text-gray-900'}`}
                />
                <Link
                  to={'/search'}
                  className={`p-2 flex items-center justify-center ${color ? 'bg-transparent hover:bg-gray-600' : ""} text-md font-semibold`}
                >
                  <Search className={`${color ? 'text-white' : 'text-gray-900'}`} />
                </Link>
              </div>

            </PopoverGroup>


          </nav>



          {/* Mobile Nav */}
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
                        src="/Nav-Logo.png"
                        loading="lazy"
                        className="h-20 w-auto"
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

                                  {/* Login/Logout */}
                                  {LoginStatus ? (
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
                          <Link
                            to="/jobfilter"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <GraduationCap className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Find Student Talents</span>
                          </Link>


                          {/* Contact */}
                          <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <Contact className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Contact</span>
                          </Link>


                          {/* Companies */}
                          <Link
                            to="/employerlist"
                            onClick={() => setMobileMenuOpen(false)}
                            className="group -mx-3 flex items-center gap-x-3 px-3 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-400/45"
                          >
                            <Building className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                            <span>Companies</span>
                          </Link>



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
