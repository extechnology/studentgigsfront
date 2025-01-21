import CompanyStory from "@/Components/Company/CompanyStory";
import CompanyOpening from "@/Components/Company/CompanyOpening";
import RealtedCompany from "@/Components/Company/RealtedCompany";

export default function EmployerDeatils() {


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });

    return (


        <>

            <main className="w-full h-auto">


                <div >

                    <div className="relative -z-0">

                        {/* Dark overlay with green tint */}
                        <div className="relative bg-emerald-900/90 overflow-hidden h-[50vh]">

                            {/* Background image */}
                            <div
                                className="absolute inset-0 z-0 bg-[url('https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?cs=srgb&dl=pexels-seven11nash-380769.jpg&fm=jpg')] bg-cover bg-no-repeat bg-center opacity-20"
                                aria-hidden="true"
                            />


                            {/* Curved bottom edge */}
                            <div className="absolute bottom-0 left-0 right-0">
                                <svg
                                    viewBox="0 0 1440 120"
                                    className="w-full h-[60px] fill-white"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" />
                                </svg>
                            </div>

                        </div>

                    </div>


                    {/* Profile card */}
                    <div>

                        <div className="-mt-14 flex flex-col sm:flex-row  md:p-8 p-5 justify-between w-[95%] md:w-3/4 m-auto border-2 shadow-sm bg-white rounded-lg relative top-[-40px] gap-5 sm:gap-0">

                            <div className="flex">

                                <div>
                                    <img
                                        src="https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png"
                                        alt="logo"
                                        loading="lazy"
                                        className=" md:w-[80px] w-[60px] shadow-lg rounded-lg p-2"
                                    />
                                </div>


                                <div className="content-center pl-3">
                                    <h2 className="font-bold text-md">Google</h2>
                                    <div className="flex gap-1">
                                        <i className="fas fa-map-marker-alt pt-1 text-gray-400"></i>
                                        <p className="text-gray-400">USA</p>
                                    </div>
                                </div>


                            </div>


                            <div className="flex md:gap-4 gap-3 items-center">
                                <div>
                                    <a href="#see-jobs">
                                        <button className="rounded-md shadow-md md:px-4 px-2 py-1 bg-gray-200 text-[#059669] font-bold hover:scale-110 duration-300">
                                            See Jobs
                                        </button>
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>


                    {/* Company discription */}
                    <CompanyStory />


                    {/* Company openings */}
                    <div id="see-jobs">

                        <CompanyOpening />

                    </div>


                    {/* Related companies */}
                    <RealtedCompany />



                </div>


            </main>


        </>



    )
}
