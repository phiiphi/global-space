const Status = () => {
  return (
    <div>
      <div className='block md:flex flex-row bg-status-bg text-black h-full md:h-96 mx-2 md:mx-12'>
        <div className='flex justify-center items-center w-full md:w-1/2 my:6'>
          <div className='bg-status-card w-1/2 h-60  shadow-lg'>
            <h2 className='flex justify-center font-bold py-4 md:py-6'>
              Reaxation At Best
            </h2>
            <div className='flex flex-col text-sm md:text-lg'>
              <p className='flex justify-center items-center'>
                Ipsum is simply dummy text
              </p>
              <p className='flex justify-center items-center'>
                of the printing  typesetting.
              </p>
              <p className='flex justify-center items-center'>
                Ipsum is simply dummy text
              </p>
            </div>
            <div className='flex justify-center my-6'>
              <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                Save Changes
              </button>
            </div>
          </div>
          <div className='w-1/2'>
            <img
              src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
              alt=''
              className='object-cover h-60'
            />
          </div>
        </div>
        <div className='flex justify-center items-center w-full md:w-1/2 my-6'>
          <div className='bg-status-card w-1/2 h-60  shadow-lg'>
            <h2 className='flex justify-center font-bold py-4 md:py-6'>
              Reaxation At Best
            </h2>
            <div className='flex flex-col text-sm md:text-lg'>
              <p className='flex justify-center items-center'>
                Ipsum is simply dummy text
              </p>
              <p className='flex justify-center items-center'>
                of the printing typesetting.
              </p>
              <p className='flex justify-center items-center'>
                Ipsum is simply dummy text
              </p>
            </div>

            <div className='flex justify-center my-6'>
              <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                Save Changes
              </button>
            </div>
          </div>
          <div className='w-1/2'>
            <img
              src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
              alt=''
              className='object-cover h-60'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Status;
