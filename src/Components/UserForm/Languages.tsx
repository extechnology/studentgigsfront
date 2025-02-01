import CreatableSelect from 'react-select/creatable';
import { Controller, useForm } from 'react-hook-form'
import ISO6391 from 'iso-639-1';
import { useEffect, useState } from 'react';


// Type definitions
interface LanguageOption {

    readonly value: string;
    readonly label: string;
}


interface Inputs {

    language: string,
    level: string
}



const Levels = [

    { value: 'Biginner', label: 'Biginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Expert', label: 'Expert' },
    { value: 'Fluent', label: 'Fluent' },
    { value: 'Native', label: 'Native' }
];


export default function Languages() {


    // Create a state to store the languages
    const [languages, setLanguages] = useState<LanguageOption[]>([])




    // Get all languages from ISO-639-1 and store them in the state
    useEffect(() => {

        const languagesData: LanguageOption[] = ISO6391.getAllNames()

            .map(name => ({
                value: name,
                label: name
            })).sort((a, b) => a.label.localeCompare(b.label));

        setLanguages(languagesData);

    }, []);



    // Form State
    const { handleSubmit, control, reset } = useForm<Inputs>();



    // Lang From Submit
    const SubmitLang = (data: any) => {

        console.log(data);

    }


    return (


        <>


            {/*Language Information */}
            <section>


                <form onSubmit={handleSubmit(SubmitLang)}>

                    <div className="border-b border-gray-900/10 pb-12">


                        <h2 className="text-2xl pb-3 font-semibold text-gray-900">
                            Languages
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">



                            {/*Language */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="feild-of-study"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Language
                                </label>
                                <div>
                                    <Controller
                                        name="language"
                                        control={control}
                                        render={({ field: { onChange, ref } }) => (
                                            <CreatableSelect
                                                ref={ref}
                                                options={languages}
                                                onChange={(option) => { onChange(option?.value) }}
                                                placeholder={"Select Your Language"}
                                                isSearchable={true}
                                                className="basic-single"
                                                isClearable={true}
                                                classNamePrefix="select"
                                            />
                                        )}
                                    />
                                </div>

                            </div>



                            {/* Levels */}
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="feild-of-study"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Level
                                </label>
                                <div>
                                    <Controller
                                        name="level"
                                        control={control}
                                        render={({ field: { onChange, ref } }) => (
                                            <CreatableSelect
                                                ref={ref}
                                                options={Levels}
                                                onChange={(option) => { onChange(option?.value) }}
                                                placeholder={"Select your Level"}
                                                isSearchable={true}
                                                className="basic-single"
                                                isClearable={false}
                                                classNamePrefix="select"
                                            />
                                        )}
                                    />
                                </div>

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


            </section>


        </>



    )
}
