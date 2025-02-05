import { ChevronDownIcon } from "lucide-react";
import PersonalInfromation from "@/Components/UserForm/PersonalInfromation";
import Education from "@/Components/UserForm/Education";
import Languages from "@/Components/UserForm/Languages";
import Skills from "@/Components/UserForm/Skills";
import SoftSkills from "@/Components/UserForm/SoftSkills";
import WorkPreferences from "@/Components/UserForm/WorkPreferences";
import ProfileEditor from "@/Components/UserForm/ProfileImage";
import Experience from "@/Components/UserForm/Experience";






export default function Settings() {


  return (

    <>


      <main className="w-full h-auto pt-28 bg-slate-50/5">


        <ProfileEditor />


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
            <Experience />


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
