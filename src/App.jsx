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
