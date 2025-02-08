import PersonalInfromation from "@/Components/UserForm/PersonalInfromation";
import Education from "@/Components/UserForm/Education";
import Languages from "@/Components/UserForm/Languages";
import Skills from "@/Components/UserForm/Skills";
import SoftSkills from "@/Components/UserForm/SoftSkills";
import WorkPreferences from "@/Components/UserForm/WorkPreferences";
import ProfileEditor from "@/Components/UserForm/ProfileImage";
import Experience from "@/Components/UserForm/Experience";
import AdditionalInfo from "@/Components/UserForm/AdditionalInfo";






export default function Settings() {



  // Scroll to top when page is loaded
  window.scrollTo({ top: 0, behavior: 'smooth', });


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
            <AdditionalInfo />


          </div>

        </div>


      </main >


    </>

  )

}
