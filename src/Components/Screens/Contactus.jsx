import Navbar from "../Items/Navbar"
import bg from '../Images/contact-vector.png'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPhoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'



function Contactus () {
    return(
        <>
            <body className='sm:px-[1rem] px-[6rem] md:px-[2rem] lg:px-[4rem]'>
                <Navbar/>
                <rest>
                    <div className=" w-[screen] my-[20rem] text-center text-[#4043bc]">
                        <p>-----contact</p>
                        <h1 className="font-bold text-[4rem]">Contact Us</h1>
                    </div>
                    <div className='border items-center'>
                        <img src={bg} alt='contactimage'/>
                    </div>
                    <div className='mt-[2rem] flex sm:flex-col'>
                        <div>
                            <h2 className=' mb-[2rem] font-bold text-[2rem]'>Get in Touch</h2>
                            <div className=''>
                                <textarea className='border rounded' name="textarea" id="" cols="47" rows="7" placeholder="Enter Message"></textarea>
                                <form>
                                    <div className='sm:flex-col flex justify-between mt-[1rem]'>
                                        <input className='border sm:mt-[1rem] sm:h-[2rem]' type="text" id="azeez" placeholder="Enter your name" required />
                                        <input className='border sm:mt-[1rem] sm:h-[2rem] md:ml-[1rem] lg:ml-[2rem]' type="email" id="azeez" placeholder="Email" required />
                                    </div>
                                    <div className='mt-[1rem]'>
                                        <textarea className='border sm:h-[2rem] sm:w-[23rem]' type="textarea" id="azeez" placeholder="Enter Subject" required />
                                    </div>
                                </form>
                                <button className='border mt-[3rem] mb-[2rem] text-[1.5rem] px-[2rem]'>Send</button>
                            </div>
                        </div>
                        <div className='ml-[2rem] mt-[5rem]'>
                            <div className='flex mb-[1rem]'>
                                <div className=' text-[2rem]'>
                                    <AiOutlineHome/>
                                </div>
                                <div className='ml-[1rem]'>
                                    <p>Pedro Rd, Gbagada, Lagos.</p>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className=' text-[2rem]'>
                                    <BsPhoneFill/>
                                </div>
                                <div className='ml-[1rem]'>
                                    <p>+234 8084259372</p>
                                </div>
                            </div>
                            <div className='flex mb-[1rem]'>
                                <div className=' text-[2rem]'>
                                    <AiOutlineMail/>
                                </div>
                                <div className='ml-[1rem]'>
                                    <p>info@zulfahgroup.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[5rem] sm:flex-col'>
                        <div>
                            <h3 className='text-[#2b4b88] text-[3rem] mb-[2rem] mt-[1rem]'>Zulfah</h3>
                            <p className='leading-[2rem]'>
                                7a, Aduke close,<br/>
                                Off Maryland Crescent,<br/>
                                Maryland, Lagos.<br/>

                                info@zulfahgroup.com
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] mt-[2rem]'>
                                Quick Links
                            </h3>
                            <p className='leading-[2rem]'>
                                About<br/>
                                Services<br/>
                                Contact<br/>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] mt-[2rem]'>
                                Support
                            </h3>
                            <p className='leading-[2rem]'>
                                Privacy Policy<br/>
                                Sitemap<br/>
                                FAQs<br/>
                            </p>
                        </div>
                        <div>
                            <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] mt-[2rem]'>
                                Core Features
                            </h3>
                            <p className='leading-[2rem]'>
                                Application Development<br/>
                                Artificial Intelligence and Machine Learning<br/>
                                Product Design<br/>
                                Product Development<br/>
                                Project Management<br/>
                                Process Automation<br/>
                            </p>
                        </div>
                    </div>
                    <div className='mt-[5rem] mb-[3rem] text-center'>
                        <p>Copyright ©2023 All rights reserved | Zulfah</p>
                    </div>
                </rest>
            </body>
        </>
       
    )
}

export default Contactus