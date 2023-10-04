import ContactCard from "../../Components/Cards/ContactCard"
import ContactCardData from "../../assets/ContactCardData"
import ContactForm from "./ContactForm";
import './style.css'

const ContactUs = () => {
    return (
        <div className="main-container contact-banner d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <p className="ck-text-1 fw-600">Contact Us</p>
                            <h3 className="ck-main-dark fw-700">
                                Get In Touch With Us
                            </h3>
                            <p className="ck-text-2 text-secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium quia dicta tempore? Fugit incidunt dolor vel recusandae eaque accusantium.
                            </p>
                        </div>
                        <div>
                            <ContactCard data={ContactCardData} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs