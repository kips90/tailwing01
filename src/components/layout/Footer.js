import {FaFacebookF, FaYoutube, FaLinkedinIn} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineCopyright} from "react-icons/ai"

function Footer() {
  return (
    <footer className=' bg-gray-700 text-white p-8 min-h-[30vh]'>
      <div className='flex gap-8 justify-center text-lg my-6'>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Login</a>
        <a>Register</a>
      </div>
      <hr/>
      <p className="text-center my-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been<br/> the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble
      </p>
      <div className='flex gap-8 my-8 justify-center'>
        <FaFacebookF/>
        <BsTwitter/>
        <FaYoutube/>
        <FaLinkedinIn/>
      </div>

      <div className="flex gap-6 items-center justify-center">
         <AiOutlineCopyright /> 2023
      </div>
    </footer>
  )
}

export default Footer