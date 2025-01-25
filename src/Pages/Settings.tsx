import { PhotoIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, UserCircleIcon } from "lucide-react";
import { useState } from "react";
import { GetUserProfile } from "@/Hooks/UserProfile";

export default function Settings() {


  // Scroll to top when page is loaded
  window.scrollTo({ top: 0, behavior: 'smooth', })



  const { data } = GetUserProfile();

  console.log(data)


  const [previewImage, setPreviewImage] = useState("");


  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      console.log("gile");
      setPreviewImage(URL.createObjectURL(file));

    }
  };


  return (

    <>


      <main className="w-full h-auto pt-20">


        <section className=" w-full m-auto px-1 sm:px-20">


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

          </div>


        </section>




        {/* User Profile Form */}
        <form className="mx-auto md:max-w-7xl w-full  px-6 md:px-20 py-10 border mb-10">


          <div className="space-y-12 container ">


            {/* Personal Information */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Personal Information
              </h2>



              <p className="mt-1 text-sm/6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>



              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                {/*  name */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>



                {/* Email address */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>




                {/* Phone Number */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="mobile tel"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>



                {/* Work Location */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="city-area"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Preferred Work Location
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="city-area"
                      name="city-area"
                      autoComplete="off"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>New York</option>
                      <option>Los Angeles</option>
                      <option>Chicago</option>
                      <option>San Francisco</option>
                      <option>Miami</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>



                {/* Available Work Hours */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="work-hours"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Available Work Hours
                  </label>
                  <div className="mt-2">
                    <input
                      id="work-hours"
                      name="work-hours"
                      type="text"
                      autoComplete="work-hours"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* Languages Known */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="languages"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Languages Known
                  </label>
                  <div className="mt-2">
                    <input
                      id="languages"
                      name="languages"
                      type="text"
                      autoComplete="off"
                      placeholder="Enter languages separated by commas"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* Country */}
                <div className="sm:col-span-full">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>



                {/* Address */}
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>



                {/* City */}
                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* State / Province */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>


                {/* ZIP / Postal code */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>



                {/* Profile photo */}
                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Profile Preview"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <UserCircleIcon
                        aria-hidden="true"
                        className="h-12 w-12 text-gray-300"
                      />
                    )}
                    <div>
                      <label
                        htmlFor="photo-input"
                        className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Change
                      </label>
                      <input
                        id="photo-input"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>





                {/* Cover photo */}
                <div className="col-span-full">

                  <label
                    htmlFor="cover-photo"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Cover photo
                  </label>


                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">

                    <div className="text-center">

                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto size-12 text-gray-300"
                      />

                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>

                      <p className="text-xs/5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>

                    </div>

                  </div>

                </div>


              </div>


            </div>






            {/* Educational Information */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Educational Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                {/* Current Academic Level */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="current-academic-level"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Current Academic Level
                  </label>
                  <div className="grid grid-cols-1">
                    <select
                      id="current-academic-level"
                      name="current-academic-level"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                    </select>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>




                {/* Field of Study */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="field-of-study"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Field of Study
                  </label>
                  <input
                    id="field-of-study"
                    name="field-of-study"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., Computer Science, Engineering"
                  />
                </div>




                {/* Name of Institution */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="institution-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Name of Institution
                  </label>
                  <input
                    id="institution-name"
                    name="institution-name"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Enter your institution's name"
                  />
                </div>




                {/* Expected Year of Graduation */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="expected-graduation-year"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Expected Year of Graduation
                  </label>
                  <input
                    id="expected-graduation-year"
                    name="expected-graduation-year"
                    type="number"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., 2025"
                  />
                </div>



                {/* Academic Achievements */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="academic-achievements"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Academic Achievements (if any)
                  </label>
                  <textarea
                    id="academic-achievements"
                    name="academic-achievements"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Describe any academic achievements or honors you've received"
                  ></textarea>
                </div>


              </div>

            </div>





            {/* Work Preferences */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Work Preferences
              </h2>


              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                {/* Interested Job Type */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="interested-job-type"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Interested Job Type
                  </label>
                  <div className="grid grid-cols-1">
                    <select
                      id="interested-job-type"
                      name="interested-job-type"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="online">Online</option>
                      <option value="offline">Offline</option>
                      <option value="both">Both</option>
                    </select>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>

                </div>



                {/* Preferred Categories */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="preferred-categories"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Preferred Categories
                  </label>
                  <input
                    id="preferred-categories"
                    name="preferred-categories"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Choose from the gig categories provided"
                  />
                </div>



                {/* expected-pay-range */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="expected-pay-range"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Expected Pay Range
                  </label>
                  <input
                    id="expected-pay-range"
                    name="expected-pay-range"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., $15-25/hour"
                  />
                </div>



                {/* Availability */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="availability"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Availability
                  </label>

                  <div className=" grid grid-cols-1">
                    <select
                      id="availability"
                      name="availability"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="part-time">Part-Time</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>

                </div>



                {/* Transportation Availability */}
                <div className="sm:col-span-full">
                  <label
                    htmlFor="transportation-availability"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Transportation Availability
                  </label>

                  <div className=" grid grid-cols-1">
                    <select
                      id="transportation-availability"
                      name="transportation-availability"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="own-vehicle">Own Vehicle</option>
                      <option value="public-transport">Public Transport</option>
                      <option value="none">None</option>
                    </select>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>

                </div>



              </div>


            </div>



            {/* Skills and Expertise */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Skills and Expertise
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                {/* Technical Skills */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="technical-skills"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Technical Skills
                  </label>
                  <input
                    id="technical-skills"
                    name="technical-skills"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., Programming, Graphic Design, Writing"
                  />
                </div>



                {/* Soft Skills */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="soft-skills"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Soft Skills
                  </label>
                  <input
                    id="soft-skills"
                    name="soft-skills"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., Communication, Teamwork, Problem-Solving"
                  />
                </div>



                {/* Certifications */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="certifications"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Certifications
                  </label>
                  <input
                    id="certifications"
                    name="certifications"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="e.g., Digital Marketing, Python"
                  />
                </div>




                {/* Portfolio/LinkedIn Profile Link */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="portfolio-link"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Portfolio/LinkedIn Profile Link (optional)
                  </label>
                  <input
                    id="portfolio-link"
                    name="portfolio-link"
                    type="url"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Enter your portfolio or LinkedIn profile URL"
                  />
                </div>



              </div>


            </div>




            {/* Experience */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Experience
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                {/* Previous Work Experience */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="previous-work-experience"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Previous Work Experience (optional)
                  </label>
                  <textarea
                    id="previous-work-experience"
                    name="previous-work-experience"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Describe any previous work experience (if applicable)"
                  ></textarea>
                </div>



                {/* Internship Experience */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="internship-experience"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Internship Experience (if any)
                  </label>
                  <textarea
                    id="internship-experience"
                    name="internship-experience"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Describe any internship experience (if applicable)"
                  ></textarea>
                </div>

              </div>
            </div>





            {/* Additional Information */}
            <div className="border-b border-gray-900/10 pb-12">


              <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                Additional Information
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                {/* Hobbies and Interests */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="hobbies-interests"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Hobbies and Interests (optional)
                  </label>
                  <textarea
                    id="hobbies-interests"
                    name="hobbies-interests"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Describe your hobbies and interests (optional)"
                  ></textarea>
                </div>



                {/* References or Testimonials */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="references-testimonials"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    References or Testimonials (optional)
                  </label>
                  <textarea
                    id="references-testimonials"
                    name="references-testimonials"
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Provide references or testimonials (optional)"
                  ></textarea>
                </div>




                {/* Willingness to Relocate */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="willingness-to-relocate"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Willingness to Relocate
                  </label>
                  <div className="grid grid-cols-1">
                    <select
                      id="willingness-to-relocate"
                      name="willingness-to-relocate"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>

                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>




                {/* Upload Resume */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="upload-resume"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Upload Resume (PDF or DOC format)
                  </label>
                  <input
                    id="upload-resume"
                    name="upload-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="block w-full rounded-md bg-white py-1.5 px-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>



              </div>
            </div>


          </div>




          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>


        </form>


      </main>


    </>
  )
}
