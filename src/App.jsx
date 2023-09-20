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
                <Route path='/Corporate_Security' element={<Construction />} />
                <Route path='/Industrial_Security' element={<Construction />} />
                <Route path='/Bank_Security' element={<Construction />} />
                <Route path='/Residential_Security' element={<Construction />} />
                <Route path='/Commercial_Complex_Security' element={<Construction />} />
                <Route path='/Hotel_Security' element={<Construction />} />
                <Route path='/Body_Guard' element={<Construction />} />
                <Route path='/Clients' element={<Construction />} />
                <Route path='/Contact_Us' element={<Construction />} />
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
