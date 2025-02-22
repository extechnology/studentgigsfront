import { Clock, IndianRupee, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate , useLocation } from 'react-router-dom';
import { useAuth } from '@/Context/AuthContext';


interface JobCardProps {
    company: string;
    logo: string;
    postedTime: string;
    jobType: string;
    salary: string;
    position: string;
    location: string;
    salaryType: string;
    id: number
    employer_id: number
}


export default function JobCard({ id, employer_id, salaryType, company, logo, postedTime, jobType, salary, position, location }: JobCardProps) {


    // To check if the user is authenticated
    const { isAuthenticated } = useAuth();


    // To navigate
    const navigate = useNavigate();


    // To get the current path
    const Location = useLocation();


    // To handle navigation
    const handleNavigation = () => {
        if (isAuthenticated) {
            navigate(`/jobdeatils/${id}`);
        } else {
            navigate("/auth", { state: { from: Location } });
        }
    }


    // To handle navigation
    const handleNavigationEmployer = () => {
        if (isAuthenticated) {
            navigate(`/employerdeatils/${employer_id}`);
        } else {
            navigate("/auth", { state: { from: Location } });
        }
    }


    // Calculate time ago
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


                    <div className='hover:cursor-pointer' onClick={handleNavigation}>

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

                    </div>

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
                            <div className='hover:cursor-pointer' onClick={handleNavigationEmployer}>
                                <h4 className="font-semibold text-gray-900 mb-1 hover:text-green-600 hover:cursor-pointer">{company}</h4>
                            </div>
                            <span className="text-gray-500 flex items-center"><MapPin size={16} className='mr-1' /> {location}</span>
                        </div>

                    </div>


                </div>


            </section>



        </>



    )
}
