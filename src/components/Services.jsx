export const Services = () => {
  return (
    <div>
      <div className='text-black my-10'>
        <h2 className='flex md:text-4xl text-2xl tracking-normal items-center justify-center my-2 font-bold md:tracking-widest'>
          Take A Deeper Look
        </h2>
      </div>
      <div className='block md:flex md:flex-row bg-ciri-for text-black h-full md:h-[32rem] mx-4         md:mx-24'>
        <div
          id='this'
          className='w-full md:w-1/2  h-[20rem] md:h-[30rem] md:mx-10 md:my-4 mx-2 my-6'
        >
          <ul id='show' className='h-[30rem]'>
            <li id='image_lines'></li>
            <li id='image_lines'></li>
            <li id='image_lines'></li>
          </ul>
          <img
            src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
            alt=''
            className='h-[20rem] md:h-[30rem]'
            id='myimg'
          />
        </div>
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <div className='w-full md:w-1/2 justify-center '>
            <div className='border-2 border-regal-green mx-2 my-2 h-60'>
              <div className='flex justify-center h-24'>
                <img
                  src={process.env.PUBLIC_URL + `/images/hot-stone.png`}
                  alt=''
                  className='h-12 w-12 my-4'
                />
              </div>
              <div className='flex justify-center items-center h-24'>
                <h3 className='mx-2 md:mx-3 items-center text-sm'>
                  Also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </h3>
              </div>
            </div>
            <div className='border-2 border-regal-green mx-2 my-2 h-60'>
              <div className='flex justify-center h-24'>
                <img
                  src={process.env.PUBLIC_URL + `/images/leg.png`}
                  alt=''
                  className='h-12 w-12 my-4'
                />
              </div>
              <div className='flex justify-center items-center h-24'>
                <h3 className='md:mx-3 mx-2 items-center text-sm'>
                  Also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </h3>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 justify-center '>
            <div className='border-2 border-regal-green mx-2 my-2 h-60'>
              <div className='flex justify-center h-24'>
                <img
                  src={process.env.PUBLIC_URL + `/images/bath-towel.png`}
                  alt=''
                  className='h-12 w-12 my-4'
                />
              </div>
              <div className='flex justify-center items-center h-24'>
                <h3 className='md:mx-3 mx-2 items-center text-sm'>
                  Also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </h3>
              </div>
            </div>
            <div className='border-2 border-regal-green mx-2 my-2 h-60'>
              <div className='flex justify-center h-24'>
                <img
                  src={process.env.PUBLIC_URL + `/images/massage.png`}
                  alt=''
                  className='h-12 w-12 my-4'
                />
              </div>
              <div className='flex justify-center items-center h-24'>
                <h3 className='md:mx-3 mx-2 items-center text-sm'>
                  Also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
