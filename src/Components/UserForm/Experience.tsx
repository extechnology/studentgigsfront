import { Hourglass } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';




interface Inputs {
    soft_skill: string
    soft_skill_level: string
}



export default function Experience() {





    // Form State
    const { handleSubmit, control, formState: { errors } } = useForm<Inputs>();



    const SubmitExperience = (data: Inputs) => {


        console.log(data);



    }


    return (



        <>

            <section>


                {/* Experience */}
                <div className="border-b border-gray-900/10 pb-12">



                    <div>


                        <form onSubmit={handleSubmit(SubmitExperience)}>


                            <h2 className="text-2xl pb-3 font-semibold text-gray-900 flex items-center">
                                Experience <Hourglass className="ml-2" size={24} />
                            </h2>

                            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">


                                {/* Job Tittle */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="feild-of-study"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Job Tittle
                                    </label>
                                    <div>
                                        <Controller
                                            name="soft_skill"
                                            control={control}
                                            rules={{ required: "At least one Skill is required" }}
                                            render={({ field: { onChange, ref } }) => (
                                                <CreatableSelect
                                                    ref={ref}
                                                    options={[]}
                                                    onChange={(option: any) => { onChange(option.label) }}
                                                    placeholder={"Search Your Job Tittle"}
                                                    isSearchable={true}
                                                    className="basic-single"
                                                    isClearable={true}
                                                    classNamePrefix="select"

                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.soft_skill && (
                                        <span className="text-sm text-red-500">{errors.soft_skill.message}</span>
                                    )}
                                </div>



                                {/* Company Name */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="feild-of-study"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Company Name
                                    </label>
                                    <div>
                                        <Controller
                                            name="soft_skill"
                                            control={control}
                                            rules={{ required: "At least one Skill is required" }}
                                            render={({ field: { onChange, ref } }) => (
                                                <CreatableSelect
                                                    ref={ref}
                                                    options={[]}
                                                    onChange={(option: any) => { onChange(option.label) }}
                                                    placeholder={"Search Your Company"}
                                                    isSearchable={true}
                                                    className="basic-single"
                                                    isClearable={true}
                                                    classNamePrefix="select"

                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.soft_skill && (
                                        <span className="text-sm text-red-500">{errors.soft_skill.message}</span>
                                    )}
                                </div>



                            </div>

                        </form>

                    </div>

                </div>



            </section >






        </>





    )







}
