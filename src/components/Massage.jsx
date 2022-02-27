const Massage = () => {
  return (
    <div>
      <div className="flex justify-center object-cover overflow-hidden bg-[url('/public/images/banner.jpeg')] bg-no-repeat h-[32rem]  text-regal-green w-full">
        <div className='items-center md:w-2/3 my-12'>
          <h2 className='text-2xl font-semibold tracking-wide'>
            Productivity <br /> Condicending <br /> Completeness
          </h2>
          <p className='mb-10 md:w-1/2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button class='rounded-full text-white bg-regal-green w-40 h-10'>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Massage;
