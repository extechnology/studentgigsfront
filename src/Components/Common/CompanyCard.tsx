import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";



interface CompanyCardProps {
    logo: string;
    title: string;
    discription: string;
    location: string;
    jobcount: number;
}

export default function CompanyCard({ logo, title, discription, location, jobcount }: CompanyCardProps) {


    return (

        <>

            <section>

                {/* Card */}
                <div

                    className="bg-white rounded-sm p-5 relative border border-gray-100 sm:w-72 w-full  shadow-md"
                >
                    <Link to={'/employerdeatils'}>

                        {/* Company Logo Container */}
                        <div className="absolute -top-5 left-5">
                            <div className="w-14 h-14 bg-white rounded-lg shadow-xl border border-gray-100 p-2.5 flex items-center justify-center">
                                <img
                                    src={logo}
                                    loading="lazy"
                                    alt={`Company logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>


                        {/* Content */}
                        <div className="mt-8">


                            {/* Company Name */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5 hover:text-green-500">
                                {title}
                            </h3>


                            {/* Job Title */}
                            <p className="text-gray-400 text-sm pb-5  border-b border-gray-100">
                                {discription}
                            </p>

                            {/* Location and Job Count */}
                            <div className="flex items-center justify-between mb-3 pt-5">
                                <div className="flex items-center text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4 mr-1.5" />
                                    <span>{location}</span>
                                </div>
                                <span className="text-emerald-600 font-medium text-sm">
                                    {jobcount} Jobs
                                </span>
                            </div>

                        </div>


                    </Link>


                </div>


            </section>



        </>



    )



}
