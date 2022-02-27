import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <div className='px-2 md:px-40  bg-worker-bg'>
      <h2 className='flex justify-center items-center text-black text-2xl pt-8'>
        Meet Our Specialist
      </h2>
      <p className='flex justify-center items-center pt-4 text-black '>
        Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <p className='flex justify-center items-center text-black '>
        Ipsum is simply dummy text of the printing and typesetting industry
        industry's standard dummy text ever since the 1500s.
      </p>
      <p className='flex justify-center items-center text-black '>
        industry's standard dummy text ever since the 1500s.
      </p>
      <Swiper
        pagination={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='w-full md:w-5/6 md:mt-20 mt-10'>
            <div className='flex flex-row h-96 text-black my-4 '>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker2.jpeg`}
                    alt=''
                    className='flex  h-full object-cover items-center'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker6.jpeg`}
                    alt=''
                    className='flex  h-full object-cover items-center'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker4.jpeg`}
                    alt=''
                    className='flex h-full object-cover items-center'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker5.jpeg`}
                    alt=''
                    className='flex  h-full object-cover items-center'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full md:w-5/6 md:mt-20 mt-10'>
            <div className='flex flex-row h-96 text-black my-4 '>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker8.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker9.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker10.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker12.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full md:w-5/6 md:my-20 mt-10'>
            <div className='flex flex-row h-96 text-black my-4 '>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker13.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='w-1/2 md:w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker14.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker11.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
              <div className='hidden md:flex flex-col w-1/4 shadow-lg mx-4'>
                <div className='h-72'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/worker15.jpeg`}
                    alt=''
                    className='flex  h-full'
                  />
                </div>
                <h2 className='bg-worker-card h-24 text-white text-sm md:text-base'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
