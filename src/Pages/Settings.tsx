import { ChevronDownIcon } from "lucide-react";
import PersonalInfromation from "@/Components/UserForm/PersonalInfromation";
import Education from "@/Components/UserForm/Education";
import Languages from "@/Components/UserForm/Languages";
import Skills from "@/Components/UserForm/Skills";
import SoftSkills from "@/Components/UserForm/SoftSkills";
import WorkPreferences from "@/Components/UserForm/WorkPreferences";






export default function Settings() {


  return (

    <>


      <main className="w-full h-auto pt-20 bg-slate-50/5">


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
        <div className="mx-auto md:max-w-7xl w-full  px-6 md:px-20 py-10 border mb-10" >

          <div className="space-y-12 container ">

            {/* Personal Information */}
            <PersonalInfromation />


            {/* Languages */}
            <Languages />


            {/* Education Form */}
            <Education />


            {/* Skills and Expertise */}
            <Skills />


            {/* Soft Skills */}
            <SoftSkills />


            {/* Work Preferences */}
            <WorkPreferences />









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



        </div>


      </main >


    </>

  )

}
