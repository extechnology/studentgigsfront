import { Briefcase, MapPin, Search, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SamplePage() {
    return (



        <>


            <main className="w-full h-auto">

                <div className="relative -z-0">

                    {/* Dark overlay with green tint */}
                    <div className="relative bg-emerald-900/90 overflow-hidden">

                        {/* Background image */}
                        <div
                            className="absolute inset-0 z-0 bg-[url('https://images.yourstory.com/cs/wordpress/2017/08/yourstory-university-students.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75')] bg-cover bg-no-repeat bg-center opacity-20"
                            aria-hidden="true"
                        />


                        <div className="relative z-10 px-4 py-32 sm:px-6 lg:px-8 sm:h-[55vh] h-[50v] flex flex-col justify-center">

                            {/* Main heading */}
                            <h1 className="text-center text-2xl font-bold tracking-tight text-white sm:text-4xl mb-8 mt-8">
                                Find Student / Talents
                            </h1>

                        </div>

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




                {/* Filter section */}
                <div className="w-full max-w-6xl mx-auto p-2 sm:-mt-20 -mt-24 relative">


                    <div className="flex flex-col md:flex-row bg-white rounded-lg sm:shadow-lg shadow-xl border sm:border-gray-50 border-gray-300 px-2 py-3 sm:py-0 sm:px-0">


                        {/* Keywords Input */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Search className="text-emerald-500" size={26} />

                            <input
                                type="text"
                                placeholder="Search Students"
                                className="w-full outline-none text-gray-600"


                            />

                        </div>



                        {/* Location Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <MapPin className="text-emerald-500" size={26} />

                            <select className="w-full outline-none text-gray-600 bg-transparent p-2">
                                <option value="" className='w-full'>Select...</option>
                                <option value="location1">Location 1</option>
                                <option value="location2">Location 2</option>
                            </select>

                        </div>



                        {/* Category Dropdown */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Briefcase className="text-emerald-500" size={26} />

                            <select className="w-full outline-none text-gray-600 bg-transparent  p-2">
                                <option value="">Select...</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category 2</option>
                            </select>


                        </div>



                        {/* Search Button */}
                        <button className="bg-emerald-500 text-white px-8 py-3 rounded-lg sm:rounded-r-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
                            <SearchIcon size={20} />
                            <span>Search</span>
                        </button>


                    </div>


                </div>





                {/* Card */}
                <section className="px-2 md:px-36 py-10 sm:py-20">


                    <div className="grid sm:grid-cols-3 sm:gap-y-16 grid-cols-1  gap-10">

                        {Array.from({ length: 6 }, (_, index) => (


                            <section key={index}>

                                {/* Card */}
                                <div

                                    className="bg-white rounded-sm p-5 relative border border-gray-100  w-full  shadow-md"
                                >
                                    <Link to={'/'}>

                                        {/* Company Logo Container */}
                                        <div className="absolute -top-8 left-4">
                                            <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center overflow-hidden">
                                                <img
                                                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                                                    loading="lazy"
                                                    alt="Company logo"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                        </div>



                                        {/* Content */}
                                        <div className="mt-8">


                                            {/* Company Name */}
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5 hover:text-green-500">
                                                Kate
                                            </h3>


                                            {/* Job Title */}
                                            <p className="text-gray-500 font-semibold text-md pb-5  border-b border-gray-100">
                                                Software Engineer
                                            </p>

                                            {/* Job Discription */}
                                            <p className="text-gray-400 text-sm py-5  border-b border-gray-100 text-justify text-pretty leading-6">
                                                A software engineer with 3+ years of experience in developing scalable and efficient software systems. Proficient in a range of programming languages, including Java, Python, and JavaScript. Strong understanding of software development life cycles, including designing, developing, testing, and deploying software applications. Experience with Agile development methodologies and version control systems such as Git. Strong problem-solving skills and ability to work in a team-oriented environment.
                                            </p>

                                            {/* Location and Job Count */}
                                            <div className="flex items-center justify-between mb-3 pt-5">
                                                <div className="flex items-center text-gray-400 text-sm">
                                                    <MapPin className="w-4 h-4 mr-1.5" />
                                                    <span>Kozhikode Kerala India</span>
                                                </div>

                                            </div>

                                        </div>


                                    </Link>


                                </div>


                            </section>


                        ))}

                    </div>

                </section>

            </main>




        </>



    )
}
