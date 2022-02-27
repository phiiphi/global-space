const Profile = () => {
  return (
    <div className='bg-profile-bg text-black'>
      <div className='flex justify-center items-center text-6xl my-4 md:my-10'>
        <h2 className='text-4xl md:text-6xl mt-10'>Meet Our Heroes</h2>
      </div>

      <div className='block md:flex flex-row h-full'>
        <div className='block w-full md:w-1/3 my-12 mx-10'>
          <h1 className='text-xl font-bold my-4'>
            Ipsum is simply dummy text <br /> of the printing and <br />
            typesetting industry. Lorem. <br /> of the printing and <br />
            typesetting industry. Lorem.
          </h1>
          <p className='underline my-2 uppercase'>
            unknown printer took a galley
          </p>
          <p className='md:full w-2/3'>
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining
          </p>
        </div>
        <div className='block md:flex w-full my-12'>
          <div className='flex w-full my-6 '>
            <div className='item-center w-1/2 shadow-lg mx-2 bg-card-bg'>
              <h2 className='flex justify-center my-4 text-xl'>
                1 Face Message
              </h2>
              <div className='flex justify-center my-4'>
                <img
                  src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
                  alt=''
                  className='flex border-2 border-regal-green rounded-full h-32 w-32'
                />
              </div>
              <div className='flex justify-center'>
                <p className='mx-4'>
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className='flex justify-center'>
                <p className='mx-4 text-xl font-bold'>48,000</p>
              </div>
              <div className='flex justify-center my-6'>
                <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                  Save Changes
                </button>
              </div>
            </div>
            <div className='item-center w-1/2 shadow-lg mr-2 bg-card-bg'>
              <h2 className='flex justify-center my-4 text-xl'>
                2 Ass Message
              </h2>
              <div className='flex justify-center my-4'>
                <img
                  src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
                  alt=''
                  className='flex border-2 border-regal-green rounded-full h-32 w-32'
                />
              </div>
              <div className='flex justify-center'>
                <p className='mx-4'>
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className='flex justify-center'>
                <p className='mx-4 text-xl font-bold'>78,000</p>
              </div>
              <div className='flex justify-center mt-6'>
                <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className='flex w-full my-6'>
            <div className='item-center w-1/2  shadow-lg mx-2 bg-card-bg'>
              <h2 className='flex justify-center my-4 text-xl'>Foot Message</h2>
              <div className='flex justify-center my-4'>
                <img
                  src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
                  alt=''
                  className='flex border-2 border-regal-green rounded-full h-32 w-32'
                />
              </div>
              <div className='flex justify-center'>
                <p className='mx-4'>
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className='flex justify-center'>
                <p className='mx-4 text-xl font-bold'>98,000</p>
              </div>
              <div className='flex justify-center mt-6'>
                <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                  Save Changes
                </button>
              </div>
            </div>
            <div className='item-center w-1/2 shadow-lg  mr-2 bg-card-bg'>
              <h2 className='flex justify-center my-4 text-xl'>Toe Message</h2>
              <div className='flex justify-center my-4'>
                <img
                  src={process.env.PUBLIC_URL + `/images/wellness.jpeg`}
                  alt=''
                  className='flex border-2 border-regal-green rounded-full h-32 w-32'
                />
              </div>
              <div className='flex justify-center'>
                <p className='mx-4'>
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
              <div className='flex justify-center'>
                <p className='mx-4 text-xl font-bold'>88,000</p>
              </div>
              <div className='flex justify-center my-6'>
                <button class='justify-center items-center flex rounded-full text-white bg-regal-green w-40 h-10'>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
