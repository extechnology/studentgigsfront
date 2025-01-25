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
                  src="https://img.freepik.com/free-photo/teenager-holding-textbooks_23-2147669090.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_hybrid"
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
                  src="https://img.freepik.com/free-photo/architects-making-thumbs-up-gesture_23-2147702466.jpg?uid=R148571391&ga=GA1.1.193612807.1732337220&semt=ais_hybrid"
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
