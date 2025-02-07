

export default function PersonalInfoLoader() {
    return (


        <>



            <div className="animate-pulse p-4 pt-10">

                <div className="relative h-[20vh] md:h-[25vh] lg:h-[39vh] rounded-lg md:rounded-2xl lg:rounded-3xl bg-gray-200 animate-pulse" />


                <div className="flex justify-start space-x-4 -mt-6 sm:-mt-10 sm:ms-8 ms-2">
                    <div className="flex items-center gap-4">
                        <div className="relative w-24 h-24 md:w-32 md:h-32">
                            <div className="w-full h-full rounded-full bg-gray-200 animate-pulse border-4 border-white shadow-lg" />
                        </div>
                    </div>

                    <div className="md:pt-12 pt-8">
                        <div className="h-3 w-32 bg-gray-200 rounded-md animate-pulse mb-2" />
                        <div className="h-3 w-24 bg-gray-200 rounded-md animate-pulse" />
                    </div>
                </div>


                {/* Personal Details Skeleton */}
                <div className="bg-gray-50/15 p-4 rounded-lg mb-6">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded-md w-full mb-5"></div>
                    ))}
                </div>


                {/* Skills Skeleton */}
                <div className="mb-6 p-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="mb-4">
                            <div className="w-24 h-4 rounded-md bg-gray-200 mb-2"></div>
                            <div className="h-5  bg-gray-200 rounded-md w-full"></div>
                        </div>
                    ))}
                </div>

                
            </div>


        </>


    )
}
