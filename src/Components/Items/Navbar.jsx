import logo from '../Images/ZULFAH-12.png'


function Navbar ({first,second,third}){
    return(
        <nav className="flex justify-between sm:px-[1rem] px-[2rem] py-[1rem] fixed top-0 w-[75rem] md:w-[45rem] lg:w-[55rem] bg-white">
            <div>
                <button  className='w-[2.5rem]'>
                    <img src={logo} alt='Zulfah_Logo'></img>
                </button>
            </div>
            <div className="w-[43rem] justify-between flex text-[#002e5b]">
                <button className='hover:text-[#f669a4] duration-800 delay-300 lg:ml-[-4rem]'><a href='/'>Home</a></button>
                <button>                        
                    <div class="dropdown">
                        <span className='hover:text-[#f669a4] duration-800 delay-300'>About</span>
                        <div class="dropdown-content">
                            <p className=' bg-[blue] text-[blue] h-[0.3rem] rounded'></p>
                            <div className=' py-[1rem] pr-[1rem] text-left leading-[2rem]'>
                                <a href={first} className='hover:text-[#f669a4] mt-[1rem] duration-800 delay-300'><p>Who-We-Do</p></a>
                                <a href={second} className='hover:text-[#f669a4] duration-800 delay-300'><p>How-We-Help</p></a>
                                <a href={third} className='hover:text-[#f669a4] duration-800 delay-300'><p>Partners</p></a>
                            </div>
                        </div>
                    </div>
                </button>
                <button className='hover:text-[#f669a4] duration-800 delay-300'>Team</button>
                <button>                        
                    <div class="dropdown">
                        <span className='hover:text-[#f669a4] duration-800 delay-300'>Proudly Us</span>
                        <div class="dropdown-content">
                            <p className=' bg-[blue] text-[blue] h-[0.3rem] rounded'></p>
                            <div className=' py-[1rem] pr-[1rem] text-left leading-[2rem]'>
                                <a href='#what-we-do' className='hover:text-[#f669a4] mt-[1rem] duration-800 delay-300'><p>Travelz</p></a>
                                <a href='#how-we-help' className='hover:text-[#f669a4] duration-800 delay-300'><p>Buzzon</p></a>
                            </div>
                        </div>
                    </div>
                </button>
                <button className='hover:text-[#f669a4] duration-800 delay-300'><a href='/Contact-Us'>Contact Us</a></button>
                <button className="border rounded-md bg-[#4043bc] text-[white] px-2 py-1 font-bold">Software Academy</button>
            </div>
        </nav>
    )
}

export default Navbar