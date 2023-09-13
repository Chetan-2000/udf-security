import About from './About'
import './Home.css'
import Landing from './Landing'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
    return (
        <div>
            <Landing />
            <Services />
            <About />
            <Testimonials />
        </div>
    )
}

export default Home