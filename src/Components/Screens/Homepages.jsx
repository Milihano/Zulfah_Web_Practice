import bg from '../Images/contact-vector.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import access from '../Images/access.png'
import acci from '../Images/acci.jpg'
import afriglobal from '../Images/afriglobal.jpeg'
import meristem from '../Images/meristem.png'
import niqs from '../Images/niqs.jpg'
import rsz from '../Images/rsz_tranex.jpg'
import '../Css/Dropdown.css'
import Navbar from '../Items/Navbar';






function HomePage() {
    return (
      <>
        <body className="sm:px-[1rem] md:px-[1rem] lg:px-[2rem] px-[6rem] text-[#748da6] font-poppins">
            <Navbar/>
            <rest>
                <div className="p-[1rem] h-screen sm:bg-none flex mt-[4rem]">
                    <div className="mt-[2rem] rounded">
                        <h1 className="text-[#2b4b80] pr-[2rem] font-bold w-[39rem] sm:w-[21rem] text-[4rem] leading-[5rem] pt-[5rem]">
                            We're An<br/>Innovative<br/>Software Company
                        </h1>
                        <p className='pt-[2rem] leading-[1.8rem]'>
                            Our customers are at heart of what we do and we <br/>
                            differentiate ourselves by the passion, attention to details and <br/>
                            creativity woven into our products. 
                        </p>
                    </div>
                    <div>
                        <img className='sm:hidden md:hidden lg:hidden' src={bg} alt='frontalimage'/>
                    </div>
                </div>
                <div className='align-center justify-center flex mt-[3rem] text-[1.4rem] p-3 font-bold bg-[#4043bc] text-[#fff] border rounded-md'>
                    <h2>
                        Join our 6-months Software Engineering Bootcamp. Click <a className='text-[#f669a4]' href="https://academy.zulfahgroup.com/">here</a> to know more.
                    </h2>
                </div>
                <div id='what-we-do'>
                    <h2 className="text-[#2b4b80] font-bold text-[3rem] text-center mt-[3rem]">
                        We're experts In:
                    </h2>
                    <div className='flex sm:flex-col md:flex-col justify-between text-center mt-[3rem]'>
                        <card className='hover:shadow-lg rounded-md px-[3rem] py-[4rem] shadow-sm'>
                            <div className='text-[4rem] text-[#ff5c97] flex justify-center'>
                                <FaAward/>
                            </div>
                            <h3 className='text-[#2b4b80] font-bold text-[1.5rem] p-[1rem]'>
                                Bespoke Software<br/>Development
                            </h3>
                            <p className='py-[2rem]'>
                                Application Design and<br/>Development
                            </p>
                            <holding className='flex items-center justify-center'>
                                <div className='hover:text-[#2b4b80] text-[1.3rem]'>
                                    <BsFillArrowRightCircleFill/>
                                </div>
                                <p className='mx-3'>Get Started</p>
                            </holding>
                        </card>
                        <card className='rounded-md px-[3rem] py-[4rem] shadow-lg'>
                            <div className='text-[4rem] text-[#ff5c97] flex justify-center'>
                                <FaSearch/>
                            </div>
                            <h3 className='text-[#2b4b80] font-bold text-[1.5rem] p-[1rem]'>
                                Artificial Intelligence<br/>and Machine Learning
                            </h3>
                            <p className='py-[2rem]'>
                                Artificial Intelligence and Machine<br/>Learning development and App<br/>integration.
                            </p>
                            <holding className='flex items-center justify-center'>
                                <div className='text-[#2b4b80] text-[1.3rem]'>
                                    <BsFillArrowRightCircleFill/>
                                </div>
                                <p className='mx-3'>Get Started</p>
                            </holding>
                        </card>
                        <card className='hover:shadow-lg rounded-md px-[3rem] py-[4rem] shadow-sm'>
                            <div className='text-[4rem] text-[#ff5c97] flex justify-center'>
                                <BsGraphUpArrow/>
                            </div>
                            <h3 className='text-[#2b4b80] font-bold text-[1.5rem] p-[1rem]'>
                                Product Design and<br/> Project Management
                            </h3>
                            <p className='py-[2rem]'>
                                Product design, development and<br/>lifecycle management.
                            </p>
                            <holding className='flex items-center justify-center'>
                                <div className='hover:text-[#2b4b80] text-[1.3rem]'>
                                    <BsFillArrowRightCircleFill/>
                                </div>
                                <p className='mx-3'>Get Started</p>
                            </holding>
                        </card>
                    </div>
                </div>
                <div className='flex justify-center mt-[2rem]'>
                    <button className='border rounded-md px-[3rem] text-[white] bg-[#FF5C97] py-[1rem]'>
                        Our Services
                    </button>
                </div>
                <div id='how-we-help'>
                    <h3 className="text-[#2b4b80] pr-[2rem] font-bold text-[3rem] text-center my-[3rem] ">We Help Companies:</h3>
                    <div className='flex sm:flex-col justify-between'>
                        <card className='flex py-[2rem] px-[3rem] gap-[1rem] rounded-md shadow-md hover:shadow-lg'>
                            <div className='text-[3rem] text-[#2b4b88]'>
                                <BsGraphUpArrow/>
                            </div>
                            <div>
                                <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] font-bold'>                                    
                                    Increase Revenue
                                </h3>
                                <p>
                                    Increasing revenues are a sign of good<br/>
                                    financial health of a business. The quality<br/>
                                    operational service tactics at Zulfah can help<br/>
                                    you minimize costs and boost your business<br/>revenues..
                                </p>
                            </div>
                        </card>
                        <card className='flex py-[2rem] px-[3rem] gap-[1rem] rounded-md shadow-md hover:shadow-lg'>
                            <div className='text-[3rem] text-[#2b4b88]'>
                                <BsGraphUpArrow/>
                            </div>
                            <div>
                                <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] font-bold'>                                    
                                    Boost Efficiency
                                </h3>
                                <p>
                                    We are commited to bringing changes that<br/>
                                    will drastically improve the levels of<br/>
                                    productivity and efficiency in your business
                                </p>
                            </div>
                        </card>
                    </div>
                    <div className='flex justify-between mt-[2rem] sm:flex-col'>
                        <card className='flex px-[3rem] py-[2rem] gap-[1rem] rounded-md shadow-md hover:shadow-lg'>
                            <div className='text-[3rem] text-[#2b4b88]'>
                                <BsGraphUpArrow/>
                            </div>
                            <div>
                                <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] font-bold'>                                    
                                    Create Happy Customers
                                </h3>
                                <p>
                                    Customers have been coming to Zulfah for<br/>
                                    first-class custom software services for over<br/>
                                    the years. Our projects result in improved<br/>
                                    business efficiency, increased ROI cost-<br/>
                                    effectiveness, and risk mitigation.
                                </p>
                            </div>
                        </card>
                        <card className='flex py-[2rem] px-[3rem] gap-[1rem] rounded-md shadow-md hover:shadow-lg'>
                            <div className='text-[3rem] text-[#2b4b88]'>
                                <BsGraphUpArrow/>
                            </div>
                            <div>
                                <h3 className='text-[#2b4b88] text-[1.4rem] mb-[2rem] font-bold'>                                    
                                    Create High-Performance Solutions
                                </h3>
                                <p>
                                    We use a proven collaborative model that is<br/>
                                    flexible and scalable. This makes our digital<br/>
                                    solutions effective even on projects with small<br/>
                                    teams. We rely on multi-disciplinary software<br/>
                                    developers, time-proven processes, and<br/>
                                    effective tools and techniques to ensure the<br/>
                                    highest level of quality.
                                </p>
                            </div>
                        </card>
                    </div>
                </div>
                <div id='partners' className='mt-[4rem]'>
                    <div>
                        <h3 className="text-[#2b4b80] pr-[2rem] font-bold text-[3rem] text-center mt-[3rem]">Our Partners</h3>
                        <p className='text-center'>Join other top companies who trust us to deliver top-notch services</p>
                    </div>
                    <div className='flex justify-between pt-[2rem]'>
                        <div className='w-[10rem]'>
                            <img src={access} alt='access'></img>
                        </div>
                        <div className='w-[10rem]'>
                            <img src={meristem} alt='meristem'></img>
                        </div>
                        <div className='w-[10rem]'>
                            <img src={niqs} alt='niqs'></img>
                        </div>
                        <div className='w-[10rem]'>
                            <img src={afriglobal} alt='afriglobal'></img>
                        </div>
                        <div className='w-[10rem]'>
                            <img src={acci} alt='acci'></img>
                        </div>
                        <div className='w-[10rem]'>
                            <img src={rsz} alt='tranex'></img>
                        </div>
                    </div>
                </div>
                <div className='flex bg-[#bd56b1] sm:px-[1rem] md:px-[1rem] lg:px-[1.5rem] justify-between px-[2rem] py-[3rem] rounded-md mt-[5rem] sm:py-[2rem]'>
                    <h3 className='font-bold text-white sm:text-[1rem] md:text-[2rem] lg:text-[2.5rem] text-[3rem]'>
                        Have a project in mind?
                    </h3>
                    <button className='bg-[white] text-[#bd56b1] sm:px-[1rem] lg:px-[1.5rem] px-[2rem] rounded-md'>
                       <a href='/Contact-us'>Contact Us</a> 
                    </button>
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
export default  HomePage