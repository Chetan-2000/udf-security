import { Link } from 'react-router-dom'
import './Footer.css'
import LocationSvg from '../../Components/SVG/LocationSvg'
import EmailSvg from '../../Components/SVG/EmailSvg'
import CallSvg from '../../Components/SVG/CallSvg'
import FacebookSvg from '../../Components/SVG/FacebookSvg'
import WhatsappSvg from '../../Components/SVG/WhatsappSvg'
import InstagramSvg from '../../Components/SVG/InstagramSvg'
import FooterLogo from './Assets/logo-light.png'

const Footer = () => {
    return (
        <footer className=''>
            <div className='container'>
                <div className=' d-lg-block d-none'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h5 className='text-white'>
                                Contact us
                            </h5>
                            <div className='mt-4'>
                                <div className='d-flex'>
                                    <div>
                                        <LocationSvg />
                                    </div>
                                    <p className='csp-text-3 text-white'>
                                        910, CORPORATE ANNEXE,NEAR CITY AVENUE,
                                        LONAWALA ROAD, WAKAD,
                                        PUNE-01.
                                    </p>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <EmailSvg />
                                    </div>
                                    <p className='csp-text-3 text-white'>
                                        xyzsecuritypvtltd@gmail.com
                                    </p>
                                </div>
                                <div className='d-flex'>
                                    <div>
                                        <CallSvg />
                                    </div>
                                    <p className='csp-text-3 text-white'>
                                        0987654321/ 022-98765432/ 022-89763452
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 px-2'>
                            <h5 className='text-white'>
                                Information links
                            </h5>
                            <div className='mt-4'>
                                <ul>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Home</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>About us</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Services</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Demo</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 px-2'>
                            <h5 className='text-white'>
                                Our Services
                            </h5>
                            <div className='mt-4'>
                                <ul>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Corporate and Industrial Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Bank Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Residential Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Commercial Complex</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Hotel Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Body Guard</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>etc</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 px-2'>
                            <h5 className='text-white'>
                                City
                            </h5>
                            <div>
                                <div className='mt-4'>
                                    <ul>
                                        <li><Link to={"/"} className='ck-text-3 text-white'>Location1</Link></li>
                                        <li><Link to={"/"} className='ck-text-3 text-white'>Location2</Link></li>
                                        <li><Link to={"/"} className='ck-text-3 text-white'>Location3</Link></li>
                                    </ul>
                                </div>
                                <div className='d-flex mt-5'>
                                    <FacebookSvg />
                                    <WhatsappSvg />
                                    <InstagramSvg />
                                    {/* <EmailSvgS /> */}
                                </div>
                                <div className='mt-4'>
                                    <img src={FooterLogo} className='img-fluid footer-logo' alt='footer-logo' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-md-block d-lg-none'>
                    <div class="accordion accordion-flush text-center" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Information links
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <ul class="accordion-body">
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Home</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>About us</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Services</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Demo</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Our Services
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <ul class="accordion-body">
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Corporate and Industrial Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Bank Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Residential Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Commercial Complex</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Hotel Security</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Body Guard</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>etc</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    City
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <ul class="accordion-body">
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Location1</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Location2</Link></li>
                                    <li><Link to={"/"} className='ck-text-3 text-white'>Location3</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Contact us
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className='accordion-body text-start'>
                                    <div className='d-flex'>
                                        <div>
                                            <LocationSvg />
                                        </div>
                                        <p className='csp-text-3 text-white mb-2'>
                                            910, CORPORATE ANNEXE,NEAR CITY AVENUE,
                                            LONAWALA ROAD, WAKAD,
                                            PUNE-01.
                                        </p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <EmailSvg />
                                        </div>
                                        <p className='csp-text-3 text-white  mb-2'>
                                            xyzsecuritypvtltd@gmail.com
                                        </p>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <CallSvg />
                                        </div>
                                        <p className='csp-text-3 text-white m-0'>
                                            0987654321/ 022-98765432/ 022-89763452
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center mt-4'>
                        <div className='col-6 d-flex justify-content-start'>
                            <img src={FooterLogo} className='img-fluid footer-logo' alt='footer-logo' />
                        </div>
                        <div className='col-6  d-flex justify-content-end'>
                            <div>
                                <FacebookSvg />
                                <WhatsappSvg />
                                <InstagramSvg />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hr-divider'></div>
                <div className='py-4 text-white text-center'>
                    © 2023 Security Guard Force India. All Rights Reserved. Powered by MrReactRealm
                </div>
            </div>
        </footer>
    )
}

export default Footer