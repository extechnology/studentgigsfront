import styled from 'styled-components';
import BlurFade from '../ui/blur-fade';
import { ChartNoAxesCombined, MousePointerClick } from 'lucide-react';


export default function PopluarJobs() {




    return (


        <>


            <div className="px-2 md:px-32 py-16">


                <div className='border-t border-gray-200 py-2 sm:py-10'>

                    <BlurFade delay={0.25} duration={0.5} inView>

                        <h2 className="pl-2 text-3xl font-semibold mb-6 text-center flex items-center justify-center">Popluar Jobs <ChartNoAxesCombined size={26} color='#16A34A' className='ms-2' /></h2>

                        <p className="pl-2 text-slate-500 mb-5 text-center  max-w-xl px-2 sm:px-0 sm:mx-auto">
                            Search all the open positions on the web. Get your own personalized
                            salary estimate. Read reviews on over 30000+ companies worldwide.
                        </p>

                    </BlurFade>


                    <BlurFade delay={0.25 * 2} duration={0.5} inView>


                        <div className="sm:m-5 mt-10">


                            <div className="group mx-2 mt-4 grid max-w-7xl grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-6 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">

                                <a href="/" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                    <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                        <img src="data:image/png;base64,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" loading='lazy' alt="img" className="h-full w-full object-cover text-gray-700" />
                                    </div>
                                </a>

                                <div className="col-span-9 flex flex-col pr-8 text-left sm:pl-4">

                                    <h3 className="text-md text-gray-600">FaceBook</h3>
                                    <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> Sr. Frontend Engineer </a>
                                    <p className="overflow-hidden pr-7 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>

                                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                        <div className="">Experience:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2 Years </span></div>
                                        <div className="">Salary:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div>

                                    </div>

                                    <div className='col-span-2 flex items-center mt-4 sm:hidden'>

                                        <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                            Apply <MousePointerClick size={20} className='ms-2' />
                                        </button>
                                    </div>

                                </div>

                                <div className='col-span-2 items-center hidden sm:flex'>

                                    <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        Apply <MousePointerClick size={20} className='ms-2' />
                                    </button>


                                </div>


                            </div>



                            <div className="group mx-2 mt-4 grid max-w-7xl grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-6 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">

                                <a href="/" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                    <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                        <img src="https://jobstack-shreethemes.vercel.app/static/media/lenovo-logo.ad2ec171d6df96c88b9e.png" loading='lazy' alt="img" className="h-full w-full object-cover text-gray-700" />
                                    </div>
                                </a>

                                <div className="col-span-9 flex flex-col pr-8 text-left sm:pl-4">

                                    <h3 className="text-md text-gray-600">Lenovo</h3>
                                    <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> Sr. Frontend Engineer </a>
                                    <p className="overflow-hidden pr-7 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>

                                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                        <div className="">Experience:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2 Years </span></div>
                                        <div className="">Salary:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div>

                                    </div>

                                    <div className='col-span-2 flex items-center mt-4 sm:hidden'>

                                        <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                            Apply <MousePointerClick size={20} className='ms-2' />
                                        </button>

                                    </div>

                                </div>

                                <div className='col-span-2 items-center hidden sm:flex'>

                                    <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        Apply <MousePointerClick size={20} className='ms-2' />
                                    </button>

                                </div>


                            </div>



                            <div className="group mx-2 mt-4 grid max-w-7xl grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-6 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">

                                <a href="/" className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
                                    <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
                                        <img src="https://jobstack-shreethemes.vercel.app/static/media/google-logo.28878765ba39f327cf3e.png" loading='lazy' alt="img" className="h-full w-full object-cover text-gray-700" />
                                    </div>
                                </a>

                                <div className="col-span-9 flex flex-col pr-8 text-left sm:pl-4">

                                    <h3 className="text-md text-gray-600">Google</h3>
                                    <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> Sr. Frontend Engineer </a>
                                    <p className="overflow-hidden pr-7 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna .</p>

                                    <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
                                        <div className="">Experience:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2 Years </span></div>
                                        <div className="">Salary:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">180-250k</span></div>

                                    </div>

                                    <div className='col-span-2 flex items-center mt-4 sm:hidden'>

                                        <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                            Apply <MousePointerClick size={20} className='ms-2' />
                                        </button>

                                    </div>

                                </div>

                                <div className='col-span-2 items-center hidden sm:flex'>

                                    <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        Apply <MousePointerClick size={20} className='ms-2' />
                                    </button>

                                </div>


                            </div>



                        </div>

                    </BlurFade>



                    <div className='flex justify-center items-center mt-5'>

                        <StyledWrapper>
                            <button>
                                <p>MoreJobs</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </StyledWrapper>

                    </div>

                </div>

            </div>


        </>


    )
}



const StyledWrapper = styled.div`
  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    cursor: pointer;
  }

  button {
    --primary-color: #111;
    --hovered-color: rgb(22 163 74 / var(--tw-text-opacity, 1));
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
  }

  button p {
    margin: 0;
    position: relative;
    font-size: 20px;
    color: var(--primary-color);
  }

  button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: -7px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
  }

  button p::before {
    position: absolute;
    /*   box-sizing: border-box; */
    content: "MoreJobs";
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: 0.3s ease-out;
  }

  button:hover::after {
    width: 100%;
  }

  button:hover p::before {
    width: 100%;
  }

  button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
  }

  button svg {
    color: var(--primary-color);
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
  }`;
