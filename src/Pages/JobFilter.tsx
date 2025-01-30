import { Briefcase, MapPin, Calendar, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import JobCard from '@/Components/Common/JobCard';

export default function JobFilter() {


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


                        <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 sm:h-[55vh] h-[50v] flex flex-col justify-center maz-w-xl mx-auto">

                            {/* Main heading */}
                            <p className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl mb-8">
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

                    <div className='grid sm:grid-cols-3 gap-4 grid-cols-1'>

                        {Array.from({ length: 9 }, (_, index) => (

                            <JobCard

                                company='Google'
                                jobType='Full Time'
                                location='New York'
                                logo='https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png'
                                position='Software Engineer'
                                postedTime='2 days ago'
                                salary='$50K - $100K'
                                herf='/jobdeatils'
                                key={index}


                            />

                        ))}

                    </div>

                </section>

            </main>





        </>





    )

}
