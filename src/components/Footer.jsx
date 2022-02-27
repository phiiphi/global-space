import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";
const Footer = () => {
  return (
    <footer className='flex flex-row justify-center items-center bg-regal-green h-40'>
      <div className='flex text-white'>
        <div className='w-1/4'>
          <p className='my-2 font-bold'>Contact Our Services</p>
          <p>Make a Connection</p>
          <div className='flex my-2'>
            <TiSocialFacebook className='text-2xl mx-1' />
            <TiSocialYoutube className='text-2xl mx-1' />
            <TiSocialInstagram className='text-2xl mx-1' />
            <TiSocialTwitter className='text-2xl mx-1' />
          </div>
        </div>
        <div className='w-1/4'>
          <p className='my-2 font-bold'>Contact Our Services</p>
          <p className='my-2'>+233 555 060 676</p>
          <button class='rounded text-black bg-white w-40 h-10'>
            Save Changes
          </button>
        </div>
        <div className='w-2/4'>
          <p className='my-1'>Lorem Ipsum is simply</p>
          <p className='my-1'>Lorem 233 209879957</p>
          <p className='text-xs'>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
