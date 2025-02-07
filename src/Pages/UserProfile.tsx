import { Ban, BriefcaseBusiness, Building2, GraduationCap, GraduationCapIcon, Laptop, Medal, Settings, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { GetPersonalInfo } from "@/Hooks/UserProfile";
import PersonalInfoLoader from "@/Components/Common/PersonalInfoLoader";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";





interface Profile {
    profile_img: string | null;
    cover_img: string | null;
}

interface Language {
    id: number;
    language: string;
    language_level: string;
    employee: number;
}

interface TechnicalSkill {
    id: number;
    technical_skill: string;
    technical_level: string;
    employee: number;
}

interface SoftSkill {
    id: number;
    soft_skill: string;
    employee: number;
}

interface Education {
    id: number;
    field_of_study: string;
    name_of_institution: string;
    expected_graduation_year: string;
    academic_level: string;
    achievement_name: string;
    employee: number;
}

interface WorkPreference {
    id: number;
    interested_job_type: string;
    expected_salary_range: string;
    availability: string;
    transportation_availability: string;
    employee: number;
}

interface PreferredJobCategory {
    id: number;
    preferred_job_category: string;
    employee: number;
}

interface Experience {
    id: number;
    exp_company_name: string;
    exp_job_title: string;
    exp_start_date: string;
    exp_end_date: string;
    exp_working: boolean;
    employee: number;
}

interface AdditionalInformation {
    employee_resume: string;
    hobbies_or_interests: string | null;
    reference_or_testimonials: string | null;
}

interface Country {
    value: string;
    label: string;
    flag: string;
}

interface PersonalInfo {
    id: number;
    profile: Profile;
    languages: Language[];
    technical_skills: TechnicalSkill[];
    soft_skills: SoftSkill[];
    educations: Education[];
    certifications: any[];
    work_preferences: WorkPreference[];
    preferred_job_categories: PreferredJobCategory[];
    experiences: Experience[];
    additional_information: AdditionalInformation;
    name: string;
    profile_photo: string | null;
    email: string;
    phone: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: Country;
    preferred_work_location: string;
    available_work_hours: number;
    available_working_periods_start_date: string;
    available_working_periods_end_date: string;
    portfolio: string;
    user: number;
    about: string;
    job_title: string;
}








export default function UserProfile() {



    // Get User Personal Information
    const { data, isLoading, isError, isFetching, isSuccess } = GetPersonalInfo()


    // User Data
    const [UserData, SetUserData] = useState<PersonalInfo | null>(null)


    useEffect(() => {

        if (data && isSuccess) {

            const SelectedInfo = data[0]

            SetUserData(SelectedInfo)

        }

    }, [data])


    return (


        <>

            <main className="pt-20 sm:pt-12">


                <div className="container">


                    <div className=" w-full m-auto px-1 sm:px-16">

                        {


                            isLoading || isError || isFetching ?


                                <PersonalInfoLoader />


                                :

                                <div>

                                    <section className="pt-10">


                                        {/* Banner Image */}
                                        <div className="relative group h-[25vh] md:h-[25vh] lg:h-[45vh] rounded-lg  md:rounded-2xl lg:rounded-3xl ">
                                            <img
                                                src={UserData?.profile?.cover_img || "https://www.paxus.com.au/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbk1HIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0725fc0328bc750a0fcc18a18ffde9bcca5b8dff/img-placeholder.jpg"}
                                                alt="banner"
                                                loading="lazy"
                                                className="w-full h-full object-cover rounded-lg md:rounded-2xl lg:rounded-3xl"
                                            />

                                        </div>



                                        {/* Profile Image */}
                                        <div className="flex justify-between -mt-6 sm:-mt-10 sm:ms-8 sm:me-10 ms-2">

                                            <div className="flex justify-between space-x-4">

                                                <div className="flex items-center gap-4">
                                                    <div className="relative group">
                                                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                                                            <img
                                                                src={UserData?.profile?.profile_img ?? "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}
                                                                alt="profile"
                                                                loading="lazy"
                                                                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                                                            />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="md:pt-12 pt-10">
                                                    <h1 className="font-semibold text-md md:text-lg">{UserData?.name}</h1>
                                                    <p className="font-[1rem] text-md md:text-lg text-gray-400">
                                                        {UserData?.job_title}
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="flex sm:mt-12 mt-10 pl-4 me-4">
                                                <Link to={'/settings'}>
                                                    <Settings size={46} className="text-black bg-green-100 rounded-full p-2 sm:h-12 sm:w-12 h-10 w-10" />
                                                </Link>
                                            </div>


                                        </div>

                                    </section>



                                    <section className="grid grid-cols-1 md:grid-cols-2 gap-9 px-2 sm:px-10">


                                        <div className="pt-10">

                                            <div className=" ">

                                                {/* User Name */}
                                                <h3 className="text-2xl  font-semibold capitalize text-gray-900 pb-5">
                                                    About Me
                                                </h3>

                                                {/* About User */}
                                                <p className="text-md sm:text-[1.1rem] font-[1rem] text-gray-500 leading-relaxed text-justify">
                                                    {UserData?.about? UserData?.about : "Add about yourself"}
                                                </p>

                                            </div>

                                        </div>




                                        <div className="md:p-4">

                                            {/* Personal Details */}
                                            <div className="max-w-full md:max-w-2xl mx-auto">


                                                <div className="shadow-sm bg-gray-50 rounded-lg p-4 md:p-6">

                                                    <h1 className="text-lg font-bold text-gray-500 mb-4">
                                                        Personal Details:
                                                    </h1>


                                                    <table className="w-full text-sm text-left text-gray-600 font-semibold">


                                                        <tbody>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-envelope mr-2"></i> Contact
                                                                    Email:
                                                                </th>
                                                                <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                                    {UserData?.email? UserData?.email : "None"}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-phone mr-2"></i> Phone Number:
                                                                </th>
                                                                <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                                    {UserData?.phone ? UserData?.phone : "None"}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-address-card mr-2"></i>{" "}
                                                                    Current Address:
                                                                </th>
                                                                <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                                    {UserData?.street_address } , {UserData?.city} , {UserData?.state} , {UserData?.postal_code}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-location-crosshairs mr-2"></i>{" "}
                                                                    Preferred Work Location (City/Area):
                                                                </th>
                                                                <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                                    {UserData?.preferred_work_location ? UserData?.preferred_work_location : "None"}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-clock mr-2"></i> Available
                                                                    Work Hours:
                                                                </th>
                                                                <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                                    {UserData?.available_work_hours ? UserData?.available_work_hours : "None"} Hr
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b">
                                                                <th
                                                                    scope="row"
                                                                    className="px-4 py-2 font-medium whitespace-nowrap text-start block md:table-cell"
                                                                >
                                                                    <i className="fa-solid fa-language mr-2"></i> Languages
                                                                    Known:
                                                                </th>

                                                                <td className="py-2 px-4 text-gray-800 block md:table-cell">

                                                                    {
                                                                        UserData?.languages && UserData?.languages.length > 0 ?

                                                                            UserData?.languages?.map((item: any) => item.language).join(", ")

                                                                            : "None"

                                                                    }


                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>



                                    {/* Skills */}
                                    <section className="w-full py-4 px-2 sm:px-10">
                                        <h1 className="text-2xl pt-3 pb-5 pl-2 text-start font-semibold text-gray-900">
                                            Technical Skills <Laptop className="inline-block ml-2" size={28} />
                                        </h1>

                                        <div className="flex flex-wrap justify-start">
                                            {

                                                UserData?.technical_skills && UserData?.technical_skills.length > 0 ?


                                                    UserData?.technical_skills?.map((skill: any, index: number) => {
                                                        // Convert skill level to percentage
                                                        const skillLevels: { [key: string]: number } = {
                                                            Beginner: 25,
                                                            Intermediate: 50,
                                                            Advanced: 75,
                                                            Expert: 100,
                                                        };
                                                        const skillPercentage = skillLevels[skill.technical_level] || 50; // Default to 50%

                                                        return (
                                                            <div key={index} className="w-full md:w-1/2 xl:w-1/3 mb-5 px-2">
                                                                <div className="flex justify-between mb-1">
                                                                    <span className="text-base font-medium text-gray-400">
                                                                        {skill.technical_skill}
                                                                    </span>
                                                                    <span className="text-sm font-medium text-gray-400">{skillPercentage}%</span>
                                                                </div>

                                                                <div className="w-full bg-gray-200 rounded-full">
                                                                    <div
                                                                        className="bg-[#059669] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                                                        style={{ width: `${skillPercentage}%` }}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })

                                                    :

                                                    <div className="flex items-center justify-center h-40 w-full">
                                                        <p className="text-gray-500 text-lg font-semibold flex items-center">No Technical Skills Found <Ban size={28} className="ml-2" /></p>
                                                    </div>

                                            }


                                        </div>
                                    </section>




                                    {/* Soft Skills */}
                                    <section className="w-full py-10 px-2 sm:px-10">
                                        <h1 className="text-2xl pt-3 pb-5 pl-2 text-start font-semibold text-gray-900">
                                            Soft Skills <Smile className="inline-block ml-2" size={28} />
                                        </h1>

                                        <div className="flex flex-wrap gap-2">
                                            {UserData?.soft_skills && UserData?.soft_skills.length > 0 ? (
                                                UserData.soft_skills.map((skill: any, index: number) => (
                                                    <span key={index} className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                                        {skill.soft_skill}
                                                    </span>
                                                ))
                                            ) : (
                                                <div className="flex items-center justify-center h-20 w-full">
                                                    <p className="text-gray-500 text-lg font-semibold flex items-center">
                                                        No Soft Skills Found <Ban size={28} className="ml-2" />
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </section>



                                    {/* Experience */}
                                    <section className="w-full pb-8 sm:px-10 px-2">

                                        <h1 className="text-2xl py-3 pl-2 text-start font-semibold text-gray-900 flex items-center">
                                            Experience <BriefcaseBusiness size={28} className="ml-2" />
                                        </h1>


                                        {
                                            UserData?.experiences && UserData.experiences.length > 0 ? (
                                                <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-10">
                                                    {UserData?.experiences.map((item: any, index: number) => (
                                                        <div className="flex gap-5" key={index}>
                                                            <div>
                                                                <img
                                                                    className="w-14 h-14"
                                                                    src="https://jobstack-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png"
                                                                    alt="company-logo"
                                                                    loading="lazy"
                                                                />
                                                            </div>

                                                            <div>
                                                                <div className="flex items-center">
                                                                    <h1 className="text-xl text-gray-900 font-semibold sm:me-5 me-2">
                                                                        {item?.exp_job_title}
                                                                    </h1>
                                                                    <p className="text-center font-semibold text-gray-500">
                                                                        {new Date(item?.exp_start_date).getFullYear()} -{" "}
                                                                        {item?.exp_working ? "Present" : new Date(item?.exp_end_date).getFullYear()}
                                                                    </p>
                                                                </div>

                                                                <p className="pb-2 font-semibold text-indigo-500">
                                                                    {item?.exp_company_name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center h-40 w-full">
                                                    <p className="text-gray-500 text-lg font-semibold flex items-center">No Experience Found <Ban size={28} className="ml-2" /></p>
                                                </div>
                                            )
                                        }

                                    </section>




                                    {/* Education */}
                                    <div className="w-full max-w-7xl mx-auto py-0 sm:py-6 px-0 sm:px-0 mb-10">

                                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 px-2 flex items-center">
                                            Educational Qualifications <GraduationCapIcon size={28} className="ml-2" />
                                        </h2>

                                        <AnimatePresence>

                                            {UserData?.educations && UserData.educations.length > 0 ?

                                                <div className="space-y-4 sm:space-y-8">

                                                    {UserData?.educations.map((item: any) => (
                                                        <motion.div
                                                            key={item.id}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: -20 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="group relative border-b border-gray-100 bg-gray-50/50 hover:bg-gray-50/50 transition-all duration-300"
                                                        >
                                                            <div className="px-3 py-4 sm:px-6 sm:py-8">
                                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
                                                                    {/* Left Column - Year */}
                                                                    <div className="sm:w-24 pt-1">
                                                                        <span className="text-sm sm:text-md font-medium text-gray-500">
                                                                            {item.expected_graduation_year}
                                                                        </span>
                                                                    </div>

                                                                    {/* Middle Column - Main Content */}
                                                                    <div className="flex-1 space-y-3">
                                                                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                                                            <div className="flex items-center gap-2">
                                                                                <GraduationCap className="h-5 w-8 sm:h-5 sm:w-5 text-blue-500" />
                                                                                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                                                                                    {item.name_of_institution}
                                                                                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs sm:text-sm font-semibold text-blue-700 ms-2">
                                                                                        {item.academic_level}
                                                                                    </span>
                                                                                </h3>
                                                                            </div>
                                                                        </div>

                                                                        <div className="space-y-2">
                                                                            <div className="flex items-center gap-2 text-gray-600">
                                                                                <Building2 className="h-4 w-4" />
                                                                                <span className="text-xs sm:text-sm">{item.field_of_study}</span>
                                                                            </div>

                                                                            {item.achievement_name && (
                                                                                <div className="flex items-start gap-2 text-gray-600">
                                                                                    <Medal className="h-4 w-4 mt-0.5 text-yellow-500" />
                                                                                    <span className="text-xs sm:text-sm">
                                                                                        {item.achievement_name.replace(/,/g, ', ')}
                                                                                    </span>
                                                                                </div>

                                                                            )}
                                                                        </div>

                                                                    </div>


                                                                </div>
                                                            </div>

                                                            {/* Hover line indicator */}
                                                            <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 opacity-100 transition-all duration-200" />
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                :

                                                <div className="flex items-center justify-center h-40">
                                                    <p className="text-gray-500 text-lg font-semibold flex items-center">No educational qualifications found <Ban size={28} className="ml-2" /></p>
                                                </div>
                                            }
                                        </AnimatePresence>

                                    </div>


                                </div>
                        }

                    </div>


                </div>


            </main>


        </>


    )
}
