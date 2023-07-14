


// function Hamburger(){
//     return(
//         <div className="flex font-Poppins items-center justify-between w-full px-[13rem] py-[1rem] md:px-[2rem] sm:px-[1rem] bg-white lg:fixed lg:top-0 lg:z-10  flex-wrap">
//             <Link to="/">
//                 <img src={logo} alt="zulfah-logo" className="w-[15.4rem] h-[5.8rem] " />
//             </Link>

//             <button onClick={() => setIsOpen(!isOpen)}  className="outline-none" >
//                 {isOpen ? (
//                 <AiOutlineClose className="lg:hidden block w-[2.5rem] h-[2.5rem]" />
//                 ) : (
//                 <AiOutlineMenu className="lg:hidden block w-[2.5rem] h-[2.5rem]" />
//                 )}
//             </button>

//             <div
//                 className={`${
//                 isOpen ? "block " : "hidden"
//                 } w-full lg:flex lg:items-center lg:w-auto  `}
//             >
//                 <ul className="lg:flex lg:justify-between items-center text-[1.6rem] font-medium md:text-[1.3rem] gap-x-[3em]   ">
//                 <li>
//                     <Link
//                     to="/workspace"
//                     className=" block cursor-pointer hover:bg-[#e8ebfe] px-[1rem] py-[1rem] hover:px-[1rem] hover:py-[1rem] sm:my-[1rem] md:my-[1rem] hover:rounded-[0.4rem]"
//                     >
//                     Workspace
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                     to="#plan"
//                     className="block cursor-pointer hover:bg-[#e8ebfe] px-[1rem] py-[1rem] hover:px-[1rem] hover:py-[1rem] sm:my-[1rem] md:my-[1rem] hover:rounded-[0.4rem]"
//                     >
//                     Plans
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                     to="/book-tour"
//                     className="block cursor-pointer hover:bg-[#e8ebfe] px-[1rem] py-[1rem] hover:px-[1rem] hover:py-[1rem] sm:my-[1rem] md:my-[1rem] hover:rounded-[0.4rem]"
//                     >
//                     Gallery
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                     to="/membership"
//                     className="block cursor-pointer hover:bg-[#e8ebfe] px-[1rem] py-[1rem] hover:px-[1rem] hover:py-[1rem] sm:my-[1rem] md:my-[1rem] hover:rounded-[0.4rem]"
//                     >
//                     Membership
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                     to="https://academy.zulfahgroup.com/"
//                     className="block cursor-pointer hover:bg-[#e8ebfe] px-[1rem] py-[1rem] hover:px-[1rem] hover:py-[1rem] sm:my-[1rem] md:my-[1rem] hover:rounded-[0.4rem]"
//                     >
//                     Academy
//                     </Link>
//                 </li>
//                 <li>
//                     <Link
//                     to="/LoginPage"
//                     className="block text-white text-[1.6rem] lg:text-center lg:w-[15rem] lg:mr-[1rem] font-bold bg-[#2B4B80] hover:bg-[#4773b9] lg:px-[3rem] py-[1rem] px-[1rem] sm:my-[1rem] md:my-[1rem] rounded-[0.4rem]  "
//                     >
//                     Login
//                     </Link>
//                 </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Hamburger