import Hero from "@/Components/Home/Hero"
import TrendingJobs from "@/Components/Home/TrendingJobs"
import PopluarJobs from "@/Components/Home/PopluarJobs"
import About from "@/Components/Home/About"

export default function Landing() {


  // Scroll to top when page is loaded
  window.scrollTo({ top: 0, behavior: 'smooth', });

  return (


    <>

      <main className="w-full h-full">


        {/* Home Hero */}
        <div>

          <Hero />

        </div>


        {/* Trending Jobs */}
        <div>

          <TrendingJobs />

        </div>

        {/* Trending Jobs */}
        <div>

          <PopluarJobs />

        </div>


        {/* Trending Jobs */}
        <div>

          <About />

        </div>



      </main >



    </>



  )






}


