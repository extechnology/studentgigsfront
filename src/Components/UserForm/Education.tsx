import { useForm, Controller } from "react-hook-form"
import { DeleteEducationInfo, GetEducationInfo } from "@/Hooks/UserProfile";
import { UniversityList } from "@/Hooks/Utils";
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { useEffect, useState } from "react";
import { AddEducationInfo } from "@/Hooks/UserProfile";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, GraduationCap, Trash2 } from "lucide-react";


interface Inputs {

    academic_level: string,
    field_of_study: string,
    name_of_institution: string
    expected_graduation_year: string
    achievement_name: string

}



const Levels = [

    { label: "No Formal Education", value: "No Formal Education" },
    { label: "Primary Education", value: "Primary Education" },
    { label: "Lower Secondary Education (Middle School)", value: "Lower Secondary Education (Middle School)" },
    { label: "Upper Secondary Education (High School)", value: "Upper Secondary Education (High School)" },

    // Diplomas & Certificates
    { label: "High School Diploma", value: "High School Diploma" },
    { label: "General Educational Development (GED)", value: "General Educational Development (GED)" },
    { label: "Diploma", value: "Diploma" },
    { label: "Certificate", value: "Certificate" },
    { label: "Post-secondary Certificate", value: "Post-secondary Certificate" },

    // Associate Degrees
    { label: "Associate Degree", value: "Associate Degree" },
    { label: "Associate of Arts (A.A.)", value: "Associate of Arts (A.A.)" },
    { label: "Associate of Science (A.S.)", value: "Associate of Science (A.S.)" },
    { label: "Associate of Applied Science (A.A.S.)", value: "Associate of Applied Science (A.A.S.)" },

    // Bachelor's Degrees
    { label: "Bachelor's Degree", value: "Bachelor's Degree" },
    { label: "Bachelor of Arts (B.A.)", value: "Bachelor of Arts (B.A.)" },
    { label: "Bachelor of Science (B.Sc.)", value: "Bachelor of Science (B.Sc.)" },
    { label: "Bachelor of Technology (B.Tech)", value: "Bachelor of Technology (B.Tech)" },
    { label: "Bachelor of Engineering (B.E.)", value: "Bachelor of Engineering (B.E.)" },
    { label: "Bachelor of Business Administration (BBA)", value: "Bachelor of Business Administration (BBA)" },
    { label: "Bachelor of Commerce (B.Com)", value: "Bachelor of Commerce (B.Com)" },
    { label: "Bachelor of Laws (LL.B.)", value: "Bachelor of Laws (LL.B.)" },
    { label: "Bachelor of Education (B.Ed.)", value: "Bachelor of Education (B.Ed.)" },
    { label: "Bachelor of Medicine, Bachelor of Surgery (MBBS)", value: "Bachelor of Medicine, Bachelor of Surgery (MBBS)" },
    { label: "Bachelor of Fine Arts (BFA)", value: "Bachelor of Fine Arts (BFA)" },

    // Master's Degrees
    { label: "Master's Degree", value: "Master's Degree" },
    { label: "Master of Arts (M.A.)", value: "Master of Arts (M.A.)" },
    { label: "Master of Science (M.Sc.)", value: "Master of Science (M.Sc.)" },
    { label: "Master of Technology (M.Tech)", value: "Master of Technology (M.Tech)" },
    { label: "Master of Engineering (M.E.)", value: "Master of Engineering (M.E.)" },
    { label: "Master of Business Administration (MBA)", value: "Master of Business Administration (MBA)" },
    { label: "Master of Laws (LL.M.)", value: "Master of Laws (LL.M.)" },
    { label: "Master of Education (M.Ed.)", value: "Master of Education (M.Ed.)" },
    { label: "Master of Social Work (MSW)", value: "Master of Social Work (MSW)" },
    { label: "Master of Fine Arts (MFA)", value: "Master of Fine Arts (MFA)" },
    { label: "Master of Public Administration (MPA)", value: "Master of Public Administration (MPA)" },
    { label: "Master of Public Health (MPH)", value: "Master of Public Health (MPH)" },

    // Doctoral & Professional Degrees
    { label: "Doctorate (Ph.D.)", value: "Doctorate (Ph.D.)" },
    { label: "Doctor of Medicine (MD)", value: "Doctor of Medicine (MD)" },
    { label: "Doctor of Business Administration (DBA)", value: "Doctor of Business Administration (DBA)" },
    { label: "Doctor of Education (Ed.D.)", value: "Doctor of Education (Ed.D.)" },
    { label: "Doctor of Pharmacy (Pharm.D.)", value: "Doctor of Pharmacy (Pharm.D.)" },
    { label: "Doctor of Law (Juris Doctor - JD)", value: "Doctor of Law (Juris Doctor - JD)" },
    { label: "Doctor of Dental Surgery (DDS)", value: "Doctor of Dental Surgery (DDS)" },
    { label: "Doctor of Veterinary Medicine (DVM)", value: "Doctor of Veterinary Medicine (DVM)" },
    { label: "Doctor of Public Health (DrPH)", value: "Doctor of Public Health (DrPH)" },

    // Postdoctoral
    { label: "Postdoctoral Studies", value: "Postdoctoral Studies" },

    // Vocational & Professional Certifications
    { label: "Vocational Training", value: "Vocational Training" },
    { label: "Professional Certification", value: "Professional Certification" },
    { label: "Trade School Certification", value: "Trade School Certification" },
    { label: "Apprenticeship", value: "Apprenticeship" },
];


// Animation
const animatedComponents = makeAnimated();


export default function Education() {


    // Search Term for University
    const [Search, setSearch] = useState("")


    // edit id 
    const [Id, Setid] = useState('')




    // Mutate for user Education
    const { mutate } = AddEducationInfo()



    // Mutate for user Education
    const { mutate: Delete } = DeleteEducationInfo()




    // Get Education infotmation data 
    const { data = [], isLoading, isError } = GetEducationInfo()




    // Get University List
    const { data: universities, isLoading: uniloading } = UniversityList(Search)





    // Form State
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm<Inputs>();





    // Set id 
    useEffect(() => {

        if (data && data.length > 0) {

            const selected = data[0];

            Setid(selected.employee)

        }

    }, [data])



    // Submit Education Information
    const SubmitEducation = (data: Inputs) => {


        // if (!data || !Id) {
        //     toast.error("User data is not available. Please try again.");
        //     return;
        // }

        const formdata = new FormData()

        formdata.append("academic_level", data.academic_level)
        formdata.append("field_of_study", data.field_of_study)
        formdata.append("expected_graduation_year", data.expected_graduation_year)
        formdata.append("achievement_name", data.achievement_name)
        formdata.append("name_of_institution", data.name_of_institution)
        formdata.append("employee", Id)


        mutate({ formData: formdata }, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status < 300) {
                    reset();
                    toast.success("Personal Information Updated Successfully");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            },
            onError: (error) => {
                toast.error("An error occurred: " + error.message);
            }

        })

    }



    // Handle delete
    const HandleDelete = (id: string) => {

        Delete(id, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status < 300) {
                    reset();
                    toast.success("Education Information Deleted Successfully");
                } else {
                    toast.error("Something went wrong. Please try again.");
                }
            },
            onError: (error) => {
                toast.error("An error occurred: " + error.message);
            }

        })


    }


    return (



        <>


            {/* Educational Information */}
            <section>

                {

                    isLoading || isError ?


                        // Loading Skeleton
                        <div className="border-b border-gray-900/10 pb-12 animate-pulse">

                            <h2 className="text-2xl pb-3 font-semibold bg-gray-200 h-6 w-1/3 rounded-full"></h2>
                            <p className="mt-1 bg-gray-200 h-4 w-2/3 rounded-full"></p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="sm:col-span-3">
                                        <div className="block text-sm/6 font-medium bg-gray-200 h-4 w-1/4 rounded-full"></div>
                                        <div className="mt-2 h-10 bg-gray-200 rounded-md w-full"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <div className="h-10 w-20 bg-gray-200 rounded-full"></div>
                                <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
                            </div>

                        </div>


                        :

                        <div className="border-b border-gray-900/10 pb-12">

                            <form onSubmit={handleSubmit(SubmitEducation)}>

                                <div className=" pb-12">


                                    <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                                        Educational Information
                                    </h2>

                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                                        {/*Current Academic Level */}
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="feild-of-study"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Current Academic Level
                                            </label>
                                            <div>
                                                <Controller
                                                    name="academic_level"
                                                    control={control}
                                                    rules={{ required: "Academic Level is required" }}
                                                    render={({ field: { onChange, value, ref } }) => (
                                                        <CreatableSelect
                                                            ref={ref}
                                                            options={Levels}
                                                            value={value ? universities?.find((option: any) => option.value === value) : null}
                                                            onChange={(option) => { onChange(option?.value) }}
                                                            placeholder={"Select Your Academic Level"}
                                                            isSearchable={true}
                                                            className="basic-single"
                                                            isClearable={true}
                                                            classNamePrefix="select"

                                                        />
                                                    )}
                                                />
                                            </div>
                                            {errors.academic_level && (
                                                <span className="text-sm text-red-500">{errors.academic_level.message}</span>
                                            )}


                                        </div>


                                        {/* Feild of Study */}
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="feild-of-study"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Feild OF Study
                                            </label>
                                            <div>
                                                <Controller
                                                    name="field_of_study"
                                                    control={control}
                                                    rules={{ required: "Field of study is required" }}
                                                    render={({ field: { onChange, value, ref } }) => (
                                                        <CreatableSelect
                                                            ref={ref}
                                                            options={data[0]?.field_of_studies ?? []}
                                                            value={value ? universities?.find((option: any) => option.value === value) : null}
                                                            onChange={(option) => { onChange(option?.value) }}
                                                            placeholder={"Search Your Field of Study"}
                                                            isSearchable={true}
                                                            className="basic-single"
                                                            isClearable={true}
                                                            classNamePrefix="select"
                                                        />
                                                    )}
                                                />
                                            </div>

                                            {errors.field_of_study && (
                                                <span className="text-sm text-red-500">{errors.field_of_study.message}</span>
                                            )}

                                        </div>



                                        {/* Name of University */}
                                        <div className="sm:col-span-full">
                                            <label
                                                htmlFor="university"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Name of University
                                            </label>
                                            <div className="mt-2">
                                                <Controller
                                                    name="name_of_institution"
                                                    control={control}
                                                    rules={{ required: "Name of University is required" }}
                                                    render={({ field: { onChange, value, ref } }) => (
                                                        <CreatableSelect
                                                            ref={ref}
                                                            options={universities}
                                                            value={value ? universities?.find((option: any) => option.value === value) : null}
                                                            onInputChange={(value) => { setSearch(value) }}
                                                            onChange={(option: any) => { onChange(option?.value) }}
                                                            placeholder={uniloading ? "Loading..." : "Search Your University"}
                                                            isSearchable={true}
                                                            className="basic-single"
                                                            isClearable={true}
                                                            classNamePrefix="select"
                                                            isLoading={uniloading}
                                                            loadingMessage={() => "Loading..."}
                                                            noOptionsMessage={() => "No University Found"}
                                                            components={animatedComponents}

                                                        />
                                                    )}
                                                />
                                            </div>

                                            {errors.name_of_institution && (
                                                <span className="text-sm text-red-500">{errors.name_of_institution.message}</span>
                                            )}

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
                                                autoComplete="expected-graduation-year"
                                                type="number"
                                                {...register("expected_graduation_year", { required: "Expected Year of Graduation is required" })}
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                                placeholder="e.g., 2025"
                                            />
                                            {errors.expected_graduation_year && (
                                                <span className="text-sm text-red-500">{errors.expected_graduation_year.message}</span>
                                            )}
                                        </div>



                                        {/* Academic Achivements */}
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="university"
                                                className="block text-sm/6 font-medium text-gray-900"
                                            >
                                                Academic Achivements
                                            </label>
                                            <div className="">
                                                <Controller
                                                    name="achievement_name"
                                                    control={control}
                                                    rules={{ required: "This field is required" }}
                                                    render={({ field: { onChange, ref } }) => (
                                                        <CreatableSelect
                                                            ref={ref}
                                                            options={[]}
                                                            onChange={(selectedOptions) => {
                                                                const newValues = selectedOptions.map((option: any) => option.value);
                                                                onChange(newValues);
                                                            }}
                                                            placeholder="Add Your Academic Achivements"
                                                            isSearchable={true}
                                                            className="basic-single"
                                                            isClearable={true}
                                                            isMulti
                                                            noOptionsMessage={() => "Create Your Academic Achivements"}
                                                            classNamePrefix="select"
                                                            components={animatedComponents}

                                                        />
                                                    )}
                                                />
                                            </div>
                                            {errors.expected_graduation_year && (
                                                <span className="text-sm text-red-500">{errors.expected_graduation_year.message}</span>
                                            )}
                                        </div>


                                    </div>

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={() => { reset() }}>
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Add
                                        </button>
                                    </div>


                                </div>

                            </form>

                            {

                                data.length > 0 &&

                                <div className="max-w-7xl mx-auto p-6">

                                    {data.length > 0 && <h2 className="text-2xl font-bold text-gray-800 mb-4">Education History</h2>}

                                    <AnimatePresence>

                                        {data.length > 0 ? (

                                            <div className="space-y-4">

                                                {data.map((item: any) => (

                                                    <motion.div
                                                        key={item.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -20 }}
                                                        className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all"
                                                    >
                                                        <div>
                                                            <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-900">
                                                                <GraduationCap className="text-blue-500" size={18} />
                                                                {item.name_of_institution}
                                                            </h3>
                                                            <p className="text-gray-600 flex items-center gap-2">
                                                                <Building2 className="text-gray-500" size={16} />
                                                                {item.academic_level}
                                                            </p>
                                                            <p className="text-gray-600 flex items-center gap-2">
                                                                <Calendar className="text-gray-500" size={16} />
                                                                Graduation Year: {item.expected_graduation_year}
                                                            </p>
                                                            <p className="text-gray-600">
                                                                <strong>Field of Study:</strong> {item.field_of_study}
                                                            </p>
                                                            <p className="text-gray-600">
                                                                <strong>Achievements:</strong> {item.achievement_name}
                                                            </p>
                                                        </div>
                                                        <button
                                                            onClick={() => HandleDelete(item.id)}
                                                            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </motion.div>
                                                ))}
                                            </div>

                                        ) : ""

                                        }

                                    </AnimatePresence>

                                </div>


                            }


                        </div>

                }

            </section>

        </>



    )



}
