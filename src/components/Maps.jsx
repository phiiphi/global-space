const Maps = () => {
  return (
    <div className='bg-worker-bg'>
      <h2 className='flex justify-center items-center font-bold text-4xl py-10 text-black'>
        Come Visit Us
      </h2>
      <div className='block md:flex h-[38rem] md:h-[26rem] justify-center'>
        <div className='w-full md:w-1/4 text-black '>
          <div className='flex flex-col mx-4 md:items-start items-center w-full '>
            <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
            <p className=''>Lorem Ipsum is simply</p>
            <p className=''>Lorem Ipsum is simply</p>
            <p className=''>Lorem Ipsum is simply</p>
            <p className=''>Lorem Ipsum is simply</p>
          </div>
          <div className='flex flex-col my-4  mx-4 items-center md:items-start w-full '>
            <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
            <p className=''>Lorem Ipsum is simply</p>
          </div>
          <div className='flex flex-col my-4 mx-4 md:items-start items-center w-full '>
            <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
            <p className=''>Lorem Ipsum is simply</p>
          </div>
        </div>
        <div className='ml-6 relative h-64 w-5/6 md:w-[38rem] border-2 border-worker-card mt-10 md:mt-1'>
          <div
            className='overflow-hidden w-full h-full'
            style={{
              background: "none!important",
            }}
          >
            <iframe
              width='600'
              height='300'
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=Ghana%20Accra%20sowutuom&t=&z=13&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
