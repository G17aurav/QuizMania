import React from 'react'
import './Main.css'
// import MainHeader from './MainHeader'
// import Loginmain from './Loginmain'
import { NavLink} from 'react-router-dom'
import help from "../Assets/helping-teachers-succeed-in-classroom.jpg"
import smile from "../Assets/smiling-students-with-backpacks_1098-1220.avif"

const Main = () => {
    return (
        <div className='wrapper'>
            <section className='qm-landing-section'>
                <div className='qm-landing-wrapper'>
                    <h1 className='heading-77'>Online
                        <span className='text-span-38'> MCQ Creator <span className='nigga'>And</span> Automated Checker</span>
                    </h1>
                    <p className='home-hero-paragraph-2'>Make a Quiz with different MCQs question And get the evaluated results automatically</p>
                    <div className='buttons-container home-hero'>
                        <div className='div-block-233'>
                            <div className='grey-button-2'>
                                <div className='button-bottom-container'>
                                    <NavLink to="/register" className='button-text'>Sign Up</NavLink>
                                    <img src='https://assets-global.website-files.com/630090a8a8859380c2358594/630090a8a885939cbf358757_Purple%20Arrow%20Button.svg' loading='lazy' alt='' className='button-arrow'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='check-text-contain'>
                        <img className='check-icon' src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a5819681c86_Check.svg' alt='' loading='lazy'></img>
                        <p className='check-text-2'>
                            <span className='bold-span-quicksand-2'>Used by several people around the world</span>
                        </p>
                    </div>
                </div>
            </section>
            <section className='section-183'>
                <div className='cont w-container'>
                    <div className='purple_bg'>
                        <h2 className='ip_purpleh2'>Welcome to
                            <span className='text-span-42'> QuizMania</span>
                        </h2>
                        <h4 className='text-new'>Empowering Educators, Inspiring Learners</h4>
                        <div className='div-block-185'>
                            <p className='ip_para_black'>📚 Are you a teacher looking for a seamless way to create and conduct online quizzes?<br />

                                🧠 Are you a student eager to test your knowledge and receive immediate results?<br />

                                Look no further! Our platform, QuizMania , is here to revolutionize your educational experience.</p>
                        </div>
                        <div >
                            <div className='w-layout-grid grid1'>
                                <div className='text-div' id='w-node1'>
                                    <h3 className='ip_purpleh3'>🌟 For Educators:</h3>
                                    <p className='ip_para_blackj'>
                                        <ul>
                                            <li>Easily create and customize multiple-choice quizzes.</li>
                                            <li>Efficiently manage your question bank for future use.</li>
                                            <li>Automate the grading process, saving you time and reducing the margin for error.</li>
                                            <li>Provide insightful analytics to track student performance.</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className='imgdiv' id='w-node1'>
                                    <img src={help} alt='' className='img mr-[6rem] w-[375px] rounded-full'></img>
                                </div>
                            </div>
                            <div className='w-layout-grid grid1'>
                                <div className='text-div' id='w-node2'>
                                    <h3 className='ip_purpleh3'>📝 For Students:</h3>
                                    <p className='ip_para_blackj'>
                                        <ul type='bullets'>
                                            <li>Attempt quizzes with a user-friendly interface.</li>
                                            <li>Receive instant feedback on your performance.</li>
                                            <li>Learn from detailed explanations for correct and incorrect answers.</li>
                                            <li>Track your progress and celebrate your academic achievements.</li>
                                        </ul>
                                    </p>
                                </div>

                                <div className='imgdiv' id='w-node2'>
                                    <img src={smile} alt='' className='img rounded-full'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='how-to-section'>
                        <div className='container-134 w-container'>
                            <h2 className='ip_purpleself'>How To Create A Quiz</h2>
                            <div className='flex justify-center items-center'>
                            <ol className='list-4 w-list-unstyled'>
                                <li>
                                    <div className='div-block-109'>
                                        <div className='div-block-116'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/621841dab97fd1654f2f9b6d_Group%2012.svg' alt='' className='image-127' width={27} loading='lazy'></img>
                                        </div>
                                        <p className='ip_pblack_list'>
                                            <strong className='bold-text-46'>Make Account : </strong>
                                            Sign Up through our Portal.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='div-block-109'>
                                        <div className='div-block-116'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/621841dab97fd1654f2f9b6d_Group%2012.svg' alt='' className='image-127' width={27} loading='lazy'></img>
                                        </div>
                                        <p className='ip_pblack_list'>
                                            <strong className='bold-text-46'>Create : </strong>
                                            Visit Services and select Create Quiz Option.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='div-block-109'>
                                        <div className='div-block-116'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/621841dab97fd1654f2f9b6d_Group%2012.svg' alt='' className='image-127' width={27} loading='lazy'></img>
                                        </div>
                                        <p className='ip_pblack_list'>
                                            <strong className='bold-text-46'>Enter Details : </strong>
                                            Enter Number of Questions and Time.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className='div-block-109'>
                                        <div className='div-block-116'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/621841dab97fd1654f2f9b6d_Group%2012.svg' alt='' className='image-127' width={27} loading='lazy'></img>
                                        </div>
                                        <p className='ip_pblack_list'>
                                            <strong className='bold-text-46'>Input : </strong>
                                            Input the Questions along with Options and Answer.
                                        </p>
                                    </div>
                                </li>
                                
                                 <li>
                                    <div className='div-block-109'>
                                        <div className='div-block-116'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/621841dab97fd1654f2f9b6d_Group%2012.svg' alt='' className='image-127' width={27} loading='lazy'></img>
                                        </div>
                                        <p className='ip_pblack_list'>
                                            <strong className='bold-text-46'>Submit : </strong>
                                            Click On submit Button After Entering the questions.
                                        </p>
                                    </div>
                                </li>
                              
                            </ol>
                            </div>
                        </div>
                    </div>
                    <div className='cta-section'>
                        <div className='cta-wrapper-2'>
                            <div className='cta-left-container-2'>
                                <div className='cta-subtext-2'>The best way to ask questions, explore ideas, and let participants show what they know.</div>
                                <h2 className='cta-heading-2'>Make an Online Quiz for Free
                                    <span className='cta-span-2'>in Minutes</span>
                                </h2>
                                <div className='buttons-container footer-buttons'>
                                    <NavLink to="/services" className='grey-button-2'>
                                        <div className='button-bottom-container'>
                                            <div className='button-text'>Create a Quiz </div>
                                            <img className='button-arrow' src='https://assets-global.website-files.com/630090a8a8859380c2358594/630090a8a885939cbf358757_Purple%20Arrow%20Button.svg' loading='lazy' alt=''></img>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='cta-image-container-2'>
                                <img className='cta-dot-images-2' src='https://assets-global.website-files.com/630090a8a8859380c2358594/630090a8a8859323e7358775_dot%20grid.png' alt='' loading='lazy'></img>
                                <img className='cta-image-2' src='https://assets-global.website-files.com/630090a8a8859380c2358594/630090a8a885932aaf3587b4_Mask%20group.webp' alt='' loading='lazy'></img>
                            </div>
                        </div>
                    </div>
                    <div className='footer-section'>
                        <div className='footer-wrapper'>
                            <div className='footer-top-wrapper'>
                                <div className='footer-left-wrapper'>
                                    <div className='footer-logo w-nav-brand'>
                                        <img src={require("../Assets/logo-black.png")} alt='' className='logo-image'></img>
                                    </div>
                                    <div className='a'>
                                        <div className='accessibility-link w-inline-block hero'>
                                            <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/64a3c543f0df3bde4580f844_Accessibility_Icon.png' alt='' className='accessibility-image'></img>
                                            <div className='text-block-144'>Accessibility<br />& Inclusion</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='footer-right-wrapper'>
                                    <div className='footer-column'>
                                        <div className='footer-links'>The Blog</div>
                                        <div className='footer-links'>Teacher Resources</div>
                                        <div className='footer-links'>Help Center</div>
                                        <div className='footer-links'>Accessibility & Inclusion</div>
                                        <div className='footer-links'>SiteMap</div>
                                        <div className='footer-links'>Terms of Service</div>
                                    </div>
                                    <div className='footer-column'>
                                        <div className='footer-links'>Worksheets</div>
                                        <div className='footer-links'>Reseller Program</div>
                                        <div className='footer-links'>Privacy Policy</div>
                                        <div className='footer-links'>Careers</div>
                                        <div className='footer-links'>About Us</div>
                                    </div>
                                    <div id='w-node-bc493706-2f04-9abd-7240-7935b31da8a5-b31da888' className='footer-column _3'>
                                        <div className='footer-text-ai'></div>
                                        <div className='download-links-contain'>
                                            <div className='download-link w-inline-block'>
                                                <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa641a161d3a2982681d00_Google%20Play.svg' alt='' className='download-image'></img>
                                            </div>
                                            <div className='download-link w-inline-block'>
                                                <img src='https://assets-global.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a1ad0681cbf_App%20Store.svg' alt='' className='download-image'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
