import { Link } from 'react-router-dom'
import './Navbar.css'
import LightLogo from './Assets/logo-light.png'
import DarkLogo from './Assets/logo-dark.png'
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 76) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <header>
            <nav className={`navbar navbar-expand-lg bg-transparent ${isSticky ? 'fixed-top navbar-blur-color' : 'navbar-dark-color'}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {isSticky ? <img src={DarkLogo} className='img-fluid' alt='logo' /> : <img src={LightLogo} className='img-fluid' alt='logo' />}
                    </Link>
                    {isSticky ?
                        <div className='light-navbar-toggler'>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        :
                        <div className='dark-navbar-toggler'>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    }
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${isSticky ? 'text-dark' : 'text-white'}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {isSticky ?
                                    <>
                                        <div className='light-navbar-dropdown'>
                                            <Link className={`nav-link dropdown-toggle ${isSticky ? 'text-dark' : 'text-white'}`} to={'#'} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">About ESN</Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <li><Link to={"/Overview"} className='ck-text-3 dropdown-item'>Overview</Link></li>
                                                <li><Link to={"/Who_We_Are"} className='ck-text-3 dropdown-item'>Who We Are?</Link></li>
                                                <li><Link to={"/What_We_Do"} className='ck-text-3 dropdown-item'>What We Do?</Link></li>
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='dark-navbar-dropdown'>
                                            <Link className={`nav-link dropdown-toggle ${isSticky ? 'text-dark' : 'text-white'}`} to={'#'} id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">About ESN</Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                <li><Link to={"/Overview"} className='ck-text-3 dropdown-item'>Overview</Link></li>
                                                <li><Link to={"/Who_We_Are"} className='ck-text-3 dropdown-item'>Who We Are?</Link></li>
                                                <li><Link to={"/What_We_Do"} className='ck-text-3 dropdown-item'>What We Do?</Link></li>
                                            </ul>
                                        </div>
                                    </>}
                            </li>
                            <li className="nav-item dropdown">
                                {isSticky ?
                                    <>
                                        <div className='light-navbar-dropdown'>
                                            <Link className={`nav-link dropdown-toggle ${isSticky ? 'text-dark' : 'text-white'}`} to={'#'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link to={"/Corporate_Security"} className='ck-text-3 dropdown-item'>Corporate Security</Link></li>
                                                <li><Link to={"/Industrial_Security"} className='ck-text-3 dropdown-item'>Industrial Security</Link></li>
                                                <li><Link to={"/Bank_Security"} className='ck-text-3 dropdown-item'>Bank Security</Link></li>
                                                <li><Link to={"/Residential_Security"} className='ck-text-3 dropdown-item'>Residential Security</Link></li>
                                                <li><Link to={"/Commercial_Complex_Security"} className='ck-text-3 dropdown-item'>Commercial Complex</Link></li>
                                                <li><Link to={"/Hotel_Security"} className='ck-text-3 dropdown-item'>Hotel Security</Link></li>
                                                <li><Link to={"/Body_Guard"} className='ck-text-3 dropdown-item'>Body Guard</Link></li>
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='dark-navbar-dropdown'>
                                            <Link className={`nav-link dropdown-toggle ${isSticky ? 'text-dark' : 'text-white'}`} to={'#'} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link to={"/Corporate_Security"} className='ck-text-3 dropdown-item'>Corporate Security</Link></li>
                                                <li><Link to={"/Industrial_Security"} className='ck-text-3 dropdown-item'>Industrial Security</Link></li>
                                                <li><Link to={"/Bank_Security"} className='ck-text-3 dropdown-item'>Bank Security</Link></li>
                                                <li><Link to={"/Residential_Security"} className='ck-text-3 dropdown-item'>Residential Security</Link></li>
                                                <li><Link to={"/Commercial_Complex_Security"} className='ck-text-3 dropdown-item'>Commercial Complex</Link></li>
                                                <li><Link to={"/Hotel_Security"} className='ck-text-3 dropdown-item'>Hotel Security</Link></li>
                                                <li><Link to={"/Body_Guard"} className='ck-text-3 dropdown-item'>Body Guard</Link></li>
                                            </ul>
                                        </div>
                                    </>}
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isSticky ? 'text-dark' : 'text-white'}`} to="/Trainning">Training</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${isSticky ? 'text-dark' : 'text-white'}`} to="/Clients">Clients</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/Contact_Us" className='ck-btn-pill'>
                                Contact Us
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
            {isSticky && <div style={{ height: '76px' }}></div>}
        </header>
    )
}

export default Navbar