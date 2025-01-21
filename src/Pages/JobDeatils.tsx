import { Briefcase, BriefcaseBusiness, Calendar1, IndianRupee, MapPin, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";


export default function JobDeatils() {


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });


    const content = `
  At ANZ, we're applying new ways technology and data can be harnessed as we work towards a common goal: to improve the financial wellbeing and sustainability of our millions of customers.

  Our community of over 5,000 engineers is key to making this happen, because technology underpins every part of our business - from delivering tools, apps and services for our customers, to building a bank for the future.

  About the Role

  As a Frontend Android Engineer in our Customer Digital Experience Tribe (CDX), you’ll play a key role in designing, developing and delivering best of the industry Android application experience. Ability to digest complex orchestration of numerous systems while adhering to stringent performance guidelines.

  The role is in an engineering ecosystem where doing the right thing with the highest quality is the norm. The role demands out of the box thinking, mentoring and more over being a great team player.

  Banking is changing and we’re changing with it, giving our people great opportunities to try new things, learn and grow. Whatever your role at ANZ, you’ll be building your future, while helping to build ours.
`;



    const qualifications = {
        Education: [
            "Bachelor’s degree",
        ],
        TechnicalSkills: [
            "Proficiency in one or more programming languages (e.g., Java, Python, C#, JavaScript).",
            "Familiarity with software development tools and environments (e.g., IDEs, version control systems).",
            "Basic understanding of algorithms, data structures, and object-oriented programming.",
            "Experience with databases (SQL or NoSQL) and web technologies (HTML, CSS, JavaScript) is a plus.",
        ],
        SoftSkills: [
            "Strong problem-solving skills and attention to detail.",
            "Ability to work effectively in a team environment.",
            "Good communication skills, both written and verbal.",
            "Eagerness to learn and adapt to new technologies.",
        ],
    };



    const skills = {
        Technical: [
            "Java",
            "Python",
            "C#",
            "JavaScript",
            "SQL",
            "NoSQL",
            "HTML",
            "CSS",
            "React",
            "Version Control (Git)",
            "Object-Oriented Programming",
        ]
    };


    return (


        <>


            <main className="w-full h-auto">


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



                {/* Job Deatils */}
                <div>

                    <div className="-mt-14 flex flex-col sm:flex-row  md:p-8 p-5 justify-between w-[95%] md:w-3/4 m-auto border-2 shadow-sm bg-white rounded-lg relative top-[-40px] gap-5 sm:gap-0">


                        {/* Profile Deatils */}
                        <div className="flex items-center gap-4">

                            <div>
                                <img
                                    src="https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png"
                                    alt="logo"
                                    loading="lazy"
                                    className=" md:w-[80px] w-[70px] shadow-lg rounded-lg p-2"
                                />
                            </div>


                            <div className="content-center pl-3">

                                <div className="flex flex-col sm:flex-row justify-between gap-2">

                                    <h2 className="font-medium text-xl text-gray-500 me-3">Software Engineer</h2>

                                    <span className="px-3 py-1 bg-emerald-200 text-gray-600 font-bold rounded-full text-sm me-3">
                                        Full Time
                                    </span>

                                    <div className="flex items-center text-gray-600 text-md">

                                        {/* <DollarSign size={16} className="text-emerald-500" /> */}

                                        <span className="font-semibold">$30k - $50k</span>
                                    </div>

                                </div>

                                <h2 className="font-bold text-md">Google</h2>

                                <div className="flex gap-1">
                                    <i className="fas fa-map-marker-alt pt-1 text-gray-700"></i>
                                    <p className="text-gray-700">USA</p>
                                </div>

                            </div>

                        </div>


                        {/* Apply Button */}
                        <div className="sm:flex md:gap-4 items-end">
                            <div>
                                <Link to={'/applyjob'}>
                                    <button className="flex w-full justify-center items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        Apply <MousePointerClick size={20} className='ms-2' />
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>


                </div>




                {/* Full Job Discription */}
                <div className="w-full px-3 sm:px-0 sm:w-3/4 m-auto ">

                    <div className="">



                        <h1 className="text-2xl font-semibold text-gray-800 pb-5">
                            Full Job Discription
                        </h1>


                        <p className="text-gray-800 font-bold mb-3 flex items-center"> <BriefcaseBusiness size={18} className="me-2 text-gray-600" />  Postion : <span className="font-semibold text-gray-500 ms-2">Software Engineer</span></p>


                        <p className="text-gray-800 font-bold mb-3 flex items-center"><MapPin size={18} className="me-2 text-gray-600" /> Location  : <span className="font-semibold text-gray-500 ms-2">USA</span></p>


                        <p className="text-gray-800 font-bold mb-3 flex items-center"> <Briefcase size={18} className="me-2 text-gray-600" /> Job Type  : <span className="font-semibold text-gray-500 ms-2">Full Time, Part Time</span></p>


                        <p className="text-gray-800 font-bold mb-3 flex items-center"><Calendar1 className="me-2 text-gray-600" size={18} /> Experience: <span className="font-semibold text-gray-500 ms-2">2-5 years</span></p>


                        <p className="text-gray-800 font-bold mb-3 flex items-center"> <IndianRupee size={18} className="me-2 text-gray-600" /> Pay: <span className="font-semibold text-gray-500 ms-2">₹15,000.00 - ₹25,000.00 per month</span></p>


                        {/* About */}
                        <div className="text-[1rem] text-gray-500 pb-2 text-justify mt-8">
                            {content
                                .trim()
                                .split("\n\n")
                                .map((paragraph, index) => (
                                    <p key={index} className="mb-4">
                                        {paragraph.trim()}
                                    </p>
                                ))}
                        </div>


                        {/* Qualification */}
                        <div className="text-[1rem] text-gray-600 mt-8 space-y-6">

                            {Object.entries(qualifications).map(([category, items], index) => (

                                <div key={index}>

                                    {/* Heading */}
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>

                                    {/* List of items */}
                                    <ul className="list-disc ml-6">
                                        {items.map((item, idx) => (
                                            <li key={idx} className="mb-1">{item}</li>
                                        ))}
                                    </ul>

                                </div>

                            ))}


                        </div>



                        {/* Skills */}
                        <div className=" py-5 rounded-lg  space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">

                                {Object.entries(skills).map(([category, skillsList], index) => (

                                    <div key={index} className="bg-white p-4">

                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{category} Skills</h3>

                                        <div className="flex flex-wrap gap-2">

                                            {skillsList.map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-green-300 text--700 rounded-full text-sm font-medium shadow-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>


                    </div>

                </div>


            </main>


        </>


    )



}
