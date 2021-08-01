import React from 'react';
import Image from 'next/image';
import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import profilePhoto from '../images/tanmoy acharjee.png';
import {useTheme} from 'next-themes';

const Sidebar = () => {

    const {theme,setTheme}  =useTheme();

    const changeTheme=()=>{
        setTheme(theme==="light"? "dark" :"light");

    }


    return (
        <div>
            <Image src={profilePhoto} alt="user avatar"  className="mx-auto border rounded-full "
        
        height="128px"
        width="100px"
        layout="intrinsic"
        quality="100"
            />
            <h3 className="my-4 text-3xl font-medium tracking-tighter font-kaushan"> <span className="text-green">Tanmoy</span> Acharjee</h3>
            <p className="px-2 py-1 my-3 text-center bg-gray-200 rounded-full dark:bg-dark-200"> Web Devloper</p>
           <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200" href="" download="name">
                 <GiTie className="w-6 h-6"/> download resume
           </a>
            {/* social icons */}
            {/* address */}
            <div >
               <div className="flex justify-around w-9/12 my-5 text-green-500 md:w-full ">
                    <a href="">
                    <AiFillGithub className="w-8 h-8"></AiFillGithub>
                </a>
                 <a href="">
                   <AiFillLinkedin className="w-8 h-8"></AiFillLinkedin>
                </a>
                 <a href="">
                   <AiFillFacebook className="w-8 h-8"></AiFillFacebook>
                </a>

               </div>
               <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200">
                    <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span>Dhaka,Bangladesh</span>
                     </div>
                <p className="my-2 text-center">tanmoyacharjee18@gmail.com</p>
                <p className="my-2 text-center">Contact: 01818200746</p>
               </div>
            </div>
            <button className="px-5 py-2 my-4 text-white rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-400 w8/12 focus:outline-none " onClick={()=>window.open('mailto:tanmoyacharjee18@gmail.com')}>Email me</button>
            <button className="px-5 py-2 my-2 text-white rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-400 w8/12"  onClick={changeTheme} >Toggle theme</button>
        </div>
    );
};

export default Sidebar;