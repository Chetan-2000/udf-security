import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import TestimonialData from '../../assets/TestimonialData';

const options = {
    autoplay: true,
    loop: true,
    margin: 15,
    dots: true,
    slidetransition: "linear",
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    autoplaySpeed: 5000,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
};

const Testimonials = () => {
    return (
        <div className="ck-main-container bg-light d-flex align-items-center">
            <div className="container">
                <h2 className=''>Testimonials</h2>
                <div className='mt-5'>
                    <OwlCarousel className='owl-carousel py-5' {...options}>
                        {TestimonialData.map((n, i) => (
                            <div key={i} className="w-100 h-100 testimonals-card p-5 item cursor-pointer">
                                <p className="ck-text-2">
                                    {n.paragraph}
                                </p>
                                <div className='d-flex'>
                                    <img className="img-fluid testimonials-image" src={n.imagePath} alt="img" />
                                    <div>
                                        <p className="ck-text-2 m-0 p-0 ck-tomato">
                                            {n.testName}
                                        </p>
                                        <p className="ck-text-2 m-0 p-0">
                                            {n.testDate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                <div className='d-flex justify-content-end'>
                    <Link to={'/'} className='ck-tomato ck-text-2'>View All</Link>
                </div>
            </div>
        </div>
    )
}

export default Testimonials