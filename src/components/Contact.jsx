import { FiChevronDown } from "react-icons/fi";
const Contact = () => {
  return (
    <div>
      <div>
        <h2 className='flex text-black md:text-4xl text-2xl tracking-normal items-center justify-center my-2 font-bold md:tracking-widest'>
          Talk To Us
        </h2>
      </div>
      <div className='block md:flex items-center text-black h-full md:h-96 my-10 md:my-2'>
        <div className='w-full md:w-1/2 px-16 md:px-32 md:mx-2 h-80'>
          <div class='inline-block relative w-[32] my-2'>
            <select class='block appearance-none w-full  h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option>
                Really long option that will likely overlap the chevron
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <FiChevronDown />
            </div>
          </div>
          <div class='inline-block relative w-[32] my-2'>
            <select class='block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option>
                Really long option that will likely overlap the chevron
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <FiChevronDown />
            </div>
          </div>
          <div class='inline-block relative w-[32] h-12 my-2'>
            <select class='block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option>
                Really long option that will likely overlap the chevron
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <FiChevronDown />
            </div>
          </div>
          <div class='inline-block relative w-[32] h-12 my-2'>
            <select class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option>
                Really long option that will likely overlap the chevron
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <FiChevronDown />
            </div>
          </div>
          <div class='inline-block relative w-[32] h-12 my-2'>
            <select class='block appearance-none w-full h-12 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline'>
              <option>
                Really long option that will likely overlap the chevron
              </option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
              <FiChevronDown />
            </div>
          </div>
        </div>
        <div className='w-4/5 md:w-1/2'>
          <div className='mx-12 my-8 bg-worker-card md:w-2/3 w-full h-80 shadow-lg'>
            <div className='flex items-center justify-center'>
              <input
                class='mt-12 bg-worker-card border-2 border-white w-4/5 md:w-3/5 h-12 my-2 text-white'
                type='text'
                placeholder='Username'
              />
            </div>
            <div className='flex justify-center'>
              <input
                class='bg-worker-card border-2 focus-within:bg-white focus-within:text-black border-white w-4/5 md:w-3/5 h-12 my-2 text-white'
                type='text'
                placeholder='Telephone number'
              />
            </div>
            <div className='flex justify-center'>
              <button class='flex justify-center bg-white w-4/5 md:w-3/5 items-center h-12 my-2'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
