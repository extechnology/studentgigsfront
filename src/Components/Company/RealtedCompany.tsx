import CompanyCard from "../Common/CompanyCard"

export default function RealtedCompany() {
    return (



        <>

            <section>

                <div className="w-full px-2 sm:px-0 sm:w-3/4 m-auto mt-16 mb-10">


                    <div>
                        <h2 className="text-center text-3xl font-semibold text-gray-800">
                            Related Companies
                        </h2>
                        <p className="text-center md:w-3/5 m-auto text-[1rem] pt-5 text-gray-400">
                            Search all the open positions on the web. Get your own personalized
                            salary estimate. Read reviews on over 30000+ companies worldwide
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-20 gap-10 pt-16">

                        {Array.from({ length: 8 }, (_, index) => (

                            <CompanyCard discription={"Digital Marketing Solutions for Tomorrow"} jobcount={5} location={"USA"} title={"Company Name"} key={index} logo={"data:image/png;base64,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"} />

                        ))}

                    </div>


                </div>


            </section>


        </>


    )
}
