import { FaLinkedin, FaMailBulk, FaInstagram, FaGithub } from "react-icons/fa";
import Button from "./Button"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                <div className="flex">
                    <p className="font-bold text-center">
                        Foodie<span className="text-green-500 text-xl">Crush</span>
                    </p>
                </div>

                <div className="">
                    <p className="text-green-500  font-bold" >QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0 mt-5">
                        <Link to='/#'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            About
                        </Link>
                        <Link
                            to='/services'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Services
                        </Link>
                        <Link
                            to='/contact'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Contact
                        </Link>
                        <Link
                            to='/chiefs'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Chiefs
                        </Link>
                    </div>
                </div>
                <div className="">
                    <p className="text-green-500  font-bold" >LEGAL</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0 mt-5">
                        <Link to='/legal'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Terms and conditions
                        </Link>
                        <Link
                            to='/legal'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            License Agreement
                        </Link>
                        <Link
                            to='/legal'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Privacy policy 
                        </Link>
                        <Link
                            to='/legal'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Copyright Information
                        </Link>
                        <Link
                            to='/legal'
                            className='block md:inline-block py-2 hover:text-gray-500'
                        >
                            Cokkies Policy
                        </Link>
                    </div>
                </div>

               

                <div className="flex flex-col">
                    <p className="text-green-500  font-bold">SOCIAL MEDIA</p>
                    <div className="flex mt-5 gap-3">
                        <Link
                            to='https://www.linkedin.com/in/mudhiiguubba-kalyonnii-4aabb3218/'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaLinkedin size={18} />
                        </Link>

                        <Link
                            to='https://instagram.com/kalyonnii?igshid=MzNlNGNkZWQ4Mg=='
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </Link>
                        <Link
                            to='mailto:mudhiiguubbakalyonnii@gmail.com'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110'
                        >
                            <FaMailBulk size={18} />
                        </Link>
                        <Link
                            to='https://github.com/kalyonnii'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaGithub size={18} />
                        </Link>
                    </div>

                    <Button
                        title='Sign up'
                        btnType='button'
                        containerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-full min-w-[130px]'
                    />
                </div>
            </div>

            <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">Designed by Kalyonnii &copy; 2024</span>
            </div>
        </footer>
    )
}

export default Footer