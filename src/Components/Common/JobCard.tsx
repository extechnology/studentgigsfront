import { Clock, IndianRupee, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';


interface JobCardProps {
    company: string;
    logo: string;
    postedTime: string;
    jobType: string;
    salary: string;
    position: string;
    location: string;
    salaryType: string;
    herf: string
    id: number
    employer_id: number
}


export default function JobCard({ id, employer_id, salaryType, company, logo, postedTime, jobType, salary, position, location, herf }: JobCardProps) {



    const [timeAgo, setTimeAgo] = useState(formatDistanceToNow(new Date(postedTime), { addSuffix: true }));

    useEffect(() => {

        const interval = setInterval(() => {
            setTimeAgo(formatDistanceToNow(new Date(postedTime), { addSuffix: true }));
        }, 60000); 

        return () => clearInterval(interval); 

    }, [postedTime]);



    return (

        <>

            <section>


                <div className="bg-white rounded-lg p-6 sm:shadow-sm shadow-md border border-gray-200 hover:shadow-md transition-shadow">


                    <Link to={`${herf}/${id}`}>

                        {/* Header - Company & Time */}
                        <div className="block justify-between items-center mb-4">

                            <h3 className="text-lg font-semibold text-gray-900">{position}</h3>

                            <div className="flex items-center text-gray-600 text-sm py-3 px-3">
                                <Clock size={16} className="mr-1 text-green-500 font-semibold" />
                                <span>{timeAgo}</span>
                            </div>

                        </div>


                        {/* Job Type & Salary */}
                        <div className="flex justify-between items-center mb-6">

                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full font-semibold text-sm">
                                {jobType}
                            </span>

                            <div className="flex items-center text-gray-500 text-sm sm:text-[0.9rem] font-medium">
                                <IndianRupee size={16} className="text-emerald-500 " />
                                <span>{salary} - {salaryType}</span>
                            </div>

                        </div>

                    </Link>

                    {/* Position & Location */}
                    <div className="flex items-center gap-4 border-t pt-7 border-gray-200/55">

                        <div className="w-14 h-14  overflow-hidden shadow-md border border-gray-50 rounded-full">
                            <img
                                src={logo}
                                alt={company}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <Link to={`/employerdeatils/${employer_id}`}>
                                <h4 className="font-semibold text-gray-900 mb-1 hover:text-green-600 hover:cursor-pointer">{company}</h4>
                            </Link>
                            <span className="text-gray-500 flex items-center"><MapPin size={16} className='mr-1' /> {location}</span>
                        </div>

                    </div>

 
                </div>


            </section>



        </>



    )
}
