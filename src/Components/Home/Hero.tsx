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
                  src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
                  alt="Banner 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTf9G3KRssGjqBsNgHGwRTjBopSQEgzkQthLmb4wN5kbg5p_h-c_vbHUVtT0hc0o019Vf_zghJAnUeqUpse2wlg1N4ICUlLpQIWn0e_LtcJQTCuf-PM1n6jf1mSmOjzNTGxWwqiFXcLf54/w1280-h720-c/mountain-landscape-abstract-4K-151.jpg"
                  alt="Banner 2"
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
                  src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
                  alt="Banner 1"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTf9G3KRssGjqBsNgHGwRTjBopSQEgzkQthLmb4wN5kbg5p_h-c_vbHUVtT0hc0o019Vf_zghJAnUeqUpse2wlg1N4ICUlLpQIWn0e_LtcJQTCuf-PM1n6jf1mSmOjzNTGxWwqiFXcLf54/w1280-h720-c/mountain-landscape-abstract-4K-151.jpg"
                  alt="Banner 2"
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
