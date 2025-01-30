import { Settings } from "lucide-react";
import { Link } from "react-router-dom";


export default function UserProfile() {


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });


    return (


        <>

            <main className="pt-8 sm:pt-12">


                <div className="container">

                    <div className="md:max-w-7xl w-full m-auto px-1 sm:px-0">

                        <section className="pt-10">


                            {/* Banner image  */}
                            <div className="  h-[20vh] rounded-lg   md:rounded-2xl lg:rounded-3xl lg:h-[35vh] md:h-[25vh] ">
                                <img
                                    className="w-full h-[100%] rounded-lg md:rounded-2xl lg:rounded-3xl "
                                    src="https://images.unsplash.com/photo-1707175834407-70806cecaa3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlua2VkaW4lMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D"
                                    alt="banner-img"
                                    loading="lazy"
                                />
                            </div>


                            {/* Profile Image */}
                            <div className="flex justify-between">


                                <div className="flex">

                                    <div className="md:w-1/5 w-1/3">
                                        <img
                                            className="rounded-full w-[90%] md:w-[80%] relative md:left-5 left-1 md:-top-12 -top-8 border-4 border-white"
                                            src="https://img.freepik.com/free-photo/close-up-new-york-man-fashionable-jacket_23-2150868236.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_tags_boosted"
                                            alt="profile-logo"
                                            loading="lazy"
                                        />
                                    </div>

                                    <div className="md:pt-2">
                                        <h1 className="font-semibold text-md md:text-lg">Vipin Raj</h1>
                                        <p className="font-[1rem] text-md md:text-lg text-gray-400">
                                            Software Developer
                                        </p>
                                    </div>

                                </div>

                                <div className="flex sm:mt-3 mt-2 me-2">
                                    <Link to={'/settings'}>
                                        <Settings size={46} className="text-black bg-green-100 rounded-full p-2" />
                                    </Link>
                                </div>


                            </div>


                        </section>



                        <section className="grid grid-cols-1 md:grid-cols-2 gap-9 px-2">


                            <div className="">


                                <div className=" ">

                                    {/* User Name */}
                                    <h3 className="text-2xl  font-semibold capitalize text-gray-900 pb-5">
                                        Vipin Raj K
                                    </h3>

                                    {/* About User */}
                                    <p className="sm:text-[1.1rem] font-[1rem] text-gray-500 leading-relaxed text-justify ">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Veritatis nobis asperiores eligendi eius officia, dolorem earum
                                        ipsum voluptatem, nihil velit molestias voluptate eum soluta
                                        mollitia! Nostrum aperiam repellendus, asperiores ab quo esse
                                        officia reiciendis id repellat, animi accusantium? Et, repellat
                                        adipisci voluptas aspernatur autem iure reprehenderit ratione?
                                        Dolores, placeat expedita!
                                    </p>

                                    <p className="sm:text-[1.1rem] font-[1rem] text-gray-500 leading-relaxed text-justify ">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Veritatis nobis asperiores eligendi eius officia, dolorem earum
                                        ipsum voluptatem, nihil velit molestias voluptate eum soluta
                                        mollitia! Nostrum aperiam repellendus, asperiores ab quo esse
                                        officia reiciendis id repellat, animi accusantium? Et, repellat
                                        adipisci voluptas aspernatur autem iure reprehenderit ratione?
                                        Dolores, placeat expedita!
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


                                        <table className="w-full text-sm text-left text-gray-500 font-semibold">


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
                                                        vipinrajk026@gmail.com
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
                                                        (+91) 9567252212
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
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Suscipit, velit?
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
                                                        Kozhikode
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
                                                        12
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
                                                    <td className="px-4 py-2 text-gray-800 block md:table-cell">
                                                        English
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Skills */}
                        <section className="w-full py-4">

                            <h1 className="text-2xl pt-3 pb-5 pl-2 text-start font-semibold text-gray-900">
                                Skills :
                            </h1>

                            <div className="flex flex-wrap justify-start ">
                                <div className="w-full md:w-1/2 xl:w-1/3 mb-5 px-2">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-400 ">
                                            Python
                                        </span>
                                        <span className="text-sm font-medium text-gray-400 ">95%</span>
                                    </div>

                                    <div className="w-full bg-gray-200 rounded-full ">
                                        <div
                                            className="bg-[#059669] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: "95%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 mb-5 px-2">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-400 ">
                                            Django
                                        </span>
                                        <span className="text-sm font-medium text-gray-400 ">85%</span>
                                    </div>

                                    <div className="w-full bg-gray-200 rounded-full ">
                                        <div
                                            className="bg-[#059669] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: "85%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 mb-5 px-2">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-400 ">
                                            JavaScript
                                        </span>
                                        <span className="text-sm font-medium text-gray-400 ">65%</span>
                                    </div>

                                    <div className="w-full bg-gray-200 rounded-full ">
                                        <div
                                            className="bg-[#059669] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: "65%" }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 xl:w-1/3 mb-5 px-2">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-400 ">
                                            React jsx/tsx
                                        </span>
                                        <span className="text-sm font-medium text-gray-400 ">75%</span>
                                    </div>

                                    <div className="w-full bg-gray-200 rounded-full ">
                                        <div
                                            className="bg-[#059669] h-2 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* Experience */}
                        <section className="w-full pb-8">

                            <h1 className="text-2xl py-3 pl-2 text-start font-semibold text-gray-900">
                                Experience :
                            </h1>


                            <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-10">

                                <div className="flex gap-5">

                                    <div>
                                        <img className="w-56" src="https://jobstack-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png" alt="company-logo" loading="lazy" />

                                    </div>

                                    <div>

                                        <div className="flex items-center">
                                            <h1 className="text-xl text-gray-900 font-semibold me-5">Full Stack Developer</h1>
                                            <p className="text-center font-semibold text-gray-500">2019-22</p>
                                        </div>

                                        <p className="pb-2 font-semibold text-indigo-500">Twitter</p>

                                        <p className="text-[0.9rem] sm:text-md font-[1rem] text-gray-500 text-justify">
                                            It seems that only fragments of the original text remain in
                                            the Lorem Ipsum texts used today. One may speculate that over
                                            the course of time certain letters were added or deleted at
                                            various positions within the text.
                                        </p>

                                    </div>


                                </div>



                                <div className="flex gap-5">

                                    <div>
                                        <img className="w-56" src="https://jobstack-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png" alt="company-logo" loading="lazy" />

                                    </div>

                                    <div>

                                        <div className="flex items-center">
                                            <h1 className="text-xl text-gray-900 font-semibold me-5">Full Stack Developer</h1>
                                            <p className="text-center font-semibold text-gray-500">2019-22</p>
                                        </div>

                                        <p className="pb-2 font-semibold text-indigo-500">Twitter</p>

                                        <p className="text-[0.9rem] sm:text-md font-[1rem] text-gray-500 text-justify">
                                            It seems that only fragments of the original text remain in
                                            the Lorem Ipsum texts used today. One may speculate that over
                                            the course of time certain letters were added or deleted at
                                            various positions within the text.
                                        </p>

                                    </div>


                                </div>



                            </div>
                        </section>
                    </div>

                </div>


            </main>


        </>


    )
}
