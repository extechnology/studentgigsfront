import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Hero = () => {



  return (
    <main className="w-full h-screen overflow-hidden">

      <div className='px-0 md:px-32 pt-20 sm:pt-24 h-full'>

        <div className="grid sm:grid-cols-2 grid-cols-1 h-full gap-x-1">

          {/* Slider 1 */}
          <div className='w-full h-full'>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full h-full" 
            >
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-photo/happy-elementary-student-playing-with-blank-sign_1098-3414.jpg?t=st=1737717729~exp=1737721329~hmac=92379401df525aef533600322f9f75ddc44bab112830b2505ca207ca239c3849&w=740"
                  alt="Banner 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>

            </Swiper>

          </div>



          {/* Slider 2 */}
          <div className="h-full hidden sm:block">

            <Swiper
              modules={[Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
            >
              <SwiperSlide>
                <img
                  src="https://img.freepik.com/free-photo/hr-reading-applicants-resume-job-interview-top-closeup-view_1163-4672.jpg?t=st=1737717772~exp=1737721372~hmac=705262941907d7d51bfcecaf2a6e6b2745b677c0fdaf2df728538c4e0a76988a&w=740"
                  alt="Banner 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>

            </Swiper>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Hero;
