import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './Containers/Navbar/Navbar'
import Home from './Containers/Home/Home'
import Footer from './Containers/Footer/Footer'
import PageNotFound from './Containers/PageNotFound/PageNotFound'
import DisableNavFooter from './Containers/PageNotFound/DisableNavFooter'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Overview from './Containers/AboutUs/Overview/Overview'
import Construction from './Containers/PageNotFound/Construction'
import WhoWeAre from './Containers/AboutUs/WhoWeAre/WhoWeAre'
import WhatWeDo from './Containers/AboutUs/WhatWeDo/WhatWeDo'
import Corporate from './Containers/Services/Corporate/Corporate'
import Industrial from './Containers/Services/Industrial/Industrial'
import Bank from './Containers/Services/Bank/Bank'
import Residential from './Containers/Services/Residential/Residential'
import Commercial from './Containers/Services/Commercial/Commercial'
import Hotel from './Containers/Services/Hotel/Hotel'
import BodyGuard from './Containers/Services/BodyGuard/BodyGuard'
import ContactUs from './Containers/ContactUs/ContactUs'
import Clients from './Containers/Clients/Clients'

function App() {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    }, []);
    return (
        <BrowserRouter>
            <DisableNavFooter>
                <Navbar />
            </DisableNavFooter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Overview' element={<Overview />} />
                <Route path='/What_We_Do' element={<WhatWeDo />} />
                <Route path='/Who_We_Are' element={<WhoWeAre />} />
                <Route path='/Trainning' element={<Construction />} />
                <Route path='/Corporate_Security' element={<Corporate />} />
                <Route path='/Industrial_Security' element={<Industrial />} />
                <Route path='/Bank_Security' element={<Bank />} />
                <Route path='/Residential_Security' element={<Residential />} />
                <Route path='/Commercial_Complex_Security' element={<Commercial />} />
                <Route path='/Hotel_Security' element={<Hotel />} />
                <Route path='/Body_Guard' element={<BodyGuard />} />
                <Route path='/Training' element={<Construction />} />
                <Route path='/Clients' element={<Clients />} />
                <Route path='/Contact_Us' element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<PageNotFound />} />
            </Routes>
            <DisableNavFooter>
                <Footer />
            </DisableNavFooter>
        </BrowserRouter>
    )
}

export default App
