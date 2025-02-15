import { Briefcase, MapPin, Calendar, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import JobCard from '@/Components/Common/JobCard';
import { PostedJobList } from '@/Hooks/JobHook';






type Country = {
    value: string;
    label: string;
    flag: string;
};

type Company = {
    id: number;
    company_name: string;
    company_info: string;
    logo: string;
    email: string;
    phone_number: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: Country;
    user: number;
};

type Job = {
    id: number;
    company: Company;
    job_title: string;
    job_description: string;
    category: string;
    age_requirement_min: number;
    age_requirement_max: number;
    preferred_academic_courses: string;
    pay_structure: string;
    salary_type: string;
    job_location: string;
    posted_date: string;
    job_type: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
};





export default function JobFilter() {



    // Get Jobs
    const { data, isLoading, isFetching, isError } = PostedJobList()


    const [keyword, setKeyword] = useState('');


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });



    return (


        <>



            <main className="w-full h-auto">


                {/* Top section */}
                <div className="relative -z-40">

                    {/* Dark overlay with green tint */}
                    <div className="relative bg-emerald-900/90 overflow-hidden">

                        {/* Background image */}
                        <div
                            className="absolute inset-0 z-0 bg-[url('https://media.licdn.com/dms/image/D4E12AQGgCMDfXyQwig/article-cover_image-shrink_720_1280/0/1709630844211?e=2147483647&v=beta&t=B-d5BWY2qZGwQnm8EImAMX131KTJCOtJIA6y5L4N1xM')] bg-cover bg-no-repeat bg-center opacity-20"
                            aria-hidden="true"
                        />


                        <div className="relative z-10 px-4 py-28 sm:px-6 lg:px-8 sm:h-[55vh] h-[50v] flex flex-col justify-center maz-w-xl mx-auto">

                            {/* Main heading */}
                            <p className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8 mt-5">
                                “Your profile is your gateway to independence and practical learning. Build it to showcase your skills, explore opportunities, and prepare for the challenges of tomorrow.”
                            </p>

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
                <div className="w-full max-w-6xl mx-auto p-2 sm:-mt-20 -mt-24">


                    <div className="flex flex-col md:flex-row bg-white rounded-lg sm:shadow-lg shadow-xl border sm:border-gray-50 border-gray-300 px-2 py-3 sm:py-0 sm:px-0">


                        {/* Keywords Input */}
                        <div className="flex-1 flex items-center gap-2 p-5 border-b md:border-b-0 md:border-r border-gray-200">

                            <Briefcase className="text-emerald-500" size={26} />

                            <input
                                type="text"
                                placeholder="Search your Jobs..."
                                className="w-full outline-none text-gray-600"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
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

                            <Calendar className="text-emerald-500" size={26} />

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



                {/* Job Card */}
                <section className='px-2 md:px-32 py-8'>

                    {isLoading || isFetching || isError ? (

                        // Show loading skeleton
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {Array.from({ length: 6 }).map((_, index) => (

                                <div key={index} className="bg-white rounded-lg p-6 sm:shadow-sm shadow-md border border-gray-200 hover:shadow-md transition-shadow animate-pulse">

                                    {/* Header - Position & Time */}
                                    <div className="mb-4">
                                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                        </div>
                                    </div>

                                    {/* Job Type & Salary */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                                        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                                    </div>

                                    {/* Position & Location */}
                                    <div className="flex items-center gap-4 border-t pt-7 border-gray-200/55">
                                        <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
                                        <div className="space-y-2">
                                            <div className="h-5 bg-gray-200 rounded w-32"></div>
                                            <div className="h-4 bg-gray-200 rounded w-48"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    ) : data?.jobs && data.jobs.length > 0 ? (

                        // Show job listings
                        <div className='grid sm:grid-cols-3 gap-4 grid-cols-1'>
                            {data.jobs.map((item: Job, index: number) => (
                                <JobCard
                                    company={item.company.company_name}
                                    salaryType={item?.salary_type}
                                    jobType={item.job_type}
                                    location={item?.country ? item?.country : item?.company?.country.label}
                                    logo={item?.company?.logo}
                                    position={item?.job_title}
                                    postedTime={item?.posted_date}
                                    salary={item?.pay_structure}
                                    herf='/jobdeatils'
                                    id={item?.id}
                                    employer_id={item?.company?.id}
                                    key={index}
                                />
                            ))}
                        </div>

                    ) : (
                       
                        <div className='text-center text-2xl font-semibold text-gray-600 py-4'>No Jobs Found</div>
                    )}

                </section>


            </main>





        </>





    )

}
