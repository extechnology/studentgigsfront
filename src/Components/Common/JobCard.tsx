import { Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';


interface JobCardProps {
    company: string;
    logo: string;
    postedTime: string;
    jobType: string;
    salary: string;
    position: string;
    location: string;
    herf:string
}


export default function JobCard({ company, logo, postedTime, jobType, salary, position, location , herf }: JobCardProps) {



    return (

        <>

            <section>


                <div className="bg-white rounded-lg p-6 sm:shadow-sm shadow-md border border-gray-200 hover:shadow-md transition-shadow">

                    <Link to={herf}>

                        {/* Header - Company & Time */}
                        <div className="block justify-between items-center mb-4">

                            <h3 className="text-lg font-semibold text-gray-900">{company}</h3>

                            <div className="flex items-center text-gray-500 text-sm py-3">
                                <Clock size={16} className="mr-1" />
                                <span>{postedTime}</span>
                            </div>


                        </div>



                        {/* Job Type & Salary */}
                        <div className="flex justify-between items-center mb-6">

                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">
                                {jobType}
                            </span>

                            <div className="flex items-center text-gray-600">
                                <DollarSign size={16} className="text-emerald-500" />
                                <span>{salary}</span>
                            </div>
                            
                        </div>


                        {/* Position & Location */}
                        <div className="flex items-center gap-4 border-t pt-7 border-gray-200/55">

                            <div className="w-12 h-12 p-2 overflow-hidden shadow-md border border-gray-50 rounded-md">
                                <img
                                    src={logo}
                                    alt={company}
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            <div>
                                <h4 className="font-semibold text-gray-900 mb-1">{position}</h4>
                                <span className="text-gray-500">{location}</span>
                            </div>

                        </div>


                    </Link>

                </div>


            </section>



        </>



    )
}
