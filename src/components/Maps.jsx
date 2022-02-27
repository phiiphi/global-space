
const Maps = () => {
  return (
    <div className='block md:flex h-[32rem] bg-worker-bg items-center justify-center'>
      <div className='w-full md:w-1/4 text-black '>
        <div>
          <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
          <p className=''>Lorem Ipsum is simply</p>
          <p className=''>Lorem Ipsum is simply</p>
          <p className=''>Lorem Ipsum is simply</p>
          <p className=''>Lorem Ipsum is simply</p>
        </div>
        <div className='my-2'>
          <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
          <p className=''>Lorem Ipsum is simply</p>
        </div>
        <div>
          <h2 className='font-semibold'>Lorem Ipsum is simply dummy</h2>
          <p className=''>Lorem Ipsum is simply</p>
        </div>
      </div>
      <div
        className='w-full md:w-3/4 border-2 border-worker-card mt-10 md:mt-1'
        style={{
          position: "relative",
          // textAlign: "right",
          height: "300px",
          width: "600px",

          
        }}
      >
        <div
          style={{
            overflow: "hidden",
            background: "none!important",
            height: "100%",
            width: "100%",
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
          {/* <a href='https://fmovies-online.net'></a> */}
          {/* <br /> */}
          {/* <a href='https://www.embedgooglemap.net'>google embed code</a> */}
        </div>
      </div>
    </div>
  );
};

export default Maps;
