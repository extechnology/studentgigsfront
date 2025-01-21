import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleUserRound, GraduationCap, House, KeyRound, LogOut, Search, Settings, User } from 'lucide-react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Header() {

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


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, [location]);




  return (



    <>

      <main className={` z-10 fixed top-0 left-0 w-full transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}>



        <header className="">

          <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between sm:p-0 p-3 lg:px-8">


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


            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 ${color ? "text-white" : ""}`}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

            </div>



            {/* Navbar items */}
            <PopoverGroup className="hidden lg:flex lg:gap-x-4 items-center">


              <Link to={'/jobfilter'}>

                <button className={`bg-blue-500 ms-2 text-white font-semibold text-md px-16 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Explore Gigs
                </button>

              </Link>


              <Link to={'/'}>

                <button className={`bg-orange-500 text-white font-semibold text-md px-16 py-2  hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out `}>
                  Find Student Talents
                </button>

              </Link>


              <Link to={'/'} className={`text-md font-semibold text-gray-400 hover:text-green-600 ${color ? "text-white" : ""}`}>
                <House size={30}  />
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

                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100" >

                      <div className="flex-auto">

                        <Link to={'/userprofile'} className="font-semibold text-gray-900 flex items-center text-center">

                          <User size={20} className="me-2" />

                          Profile

                        </Link>


                      </div>

                    </div>



                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                      <div className="flex-auto">

                        <Link to={'/settings'} className="font-semibold text-gray-900 flex items-center">

                          <Settings size={20} className="me-2" />
                          Settings

                        </Link>


                      </div>

                    </div>


                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                      <div className="flex-auto">

                        <Link to={'/auth'} className="font-semibold text-gray-900 flex items-center">

                          <KeyRound size={20} className="me-2" />
                          Login


                        </Link>

                      </div>

                    </div>



                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50" >

                      <div className="flex-auto">

                        <Link to={'/login'} className=" font-semibold text-gray-900 flex items-center">

                          <LogOut size={20} className="me-2" />
                          Logout


                        </Link>


                      </div>

                    </div>

                  </div>

                </PopoverPanel>

              </Popover>


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
                  <Search  className={`${color ? 'text-white' : 'text-gray-900'}`} />
                </Link>
              </div>

            </PopoverGroup>


            


          </nav>



          {/* Mobile Nav */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">

            <div className="fixed inset-0 z-10" />

            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">



              {/* Logo */}
              <div className="flex items-center justify-between">


                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="nav-icon"
                    src="/Nav-Logo.png"
                    loading="lazy"
                    className="h-24 w-auto"
                  />
                </a>


                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>


              </div>


              <div className="mt-6 flow-root">

                <div className="-my-6 divide-y divide-gray-500/10">

                  <div className="space-y-2 py-6">

                    {/* Profile */}
                    <Disclosure as="div" className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        Profile
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                      </DisclosureButton>


                      <DisclosurePanel className="mt-2 space-y-2">


                        <Link to="/userprofile" onClick={() => setMobileMenuOpen(false)}>
                          <DisclosureButton

                            className="flex rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            <User size={20} className="me-2" /> Profile
                          </DisclosureButton>
                        </Link>


                        <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                          <DisclosureButton

                            className="flex rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            <Settings size={20} className="me-2" /> Settings
                          </DisclosureButton>
                        </Link>

                        <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                          <DisclosureButton

                            className="flex rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            <KeyRound size={20} className="me-2" />  Login
                          </DisclosureButton>
                        </Link>


                        <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                          <DisclosureButton

                            className="flex rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            <LogOut size={20} className="me-2" /> LogOut
                          </DisclosureButton>
                        </Link>


                      </DisclosurePanel>


                    </Disclosure>


                    <Link to="/jobfilter"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Search Gig Jobs
                    </Link>


                    <Link to={'/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>


                    <Link to={'/employerlist'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </Link>

                  </div>


                  <div className="py-6" onClick={() => setMobileMenuOpen(false)}>

                    <button className="flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold text-lg px-3 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                      Hire Students     <GraduationCap size={24} className="ms-2" color="#fff" />
                    </button>

                  </div>

                </div>
              </div>

            </DialogPanel>


          </Dialog>


        </header>


      </main>

    </>



  )
}
