import ServiceOffer from "../../Components/Cards/ServiceOffer";
import ServiceOfferData from "../../assets/ServiceOfferData";

const Services = () => {
    return (
        <div className="ck-main-container bg-light d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h2 className="">
                            Services<br />We Offer
                        </h2>
                        <p className="ck-text-1 mt-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolor ullam voluptates, in blanditiis aut dignissimos debitis facilis perspiciatis recusandae nam eius sint obcaecati laborum tempora commodi modi nesciunt autem.
                            in blanditiis aut dignissimos debitis facilis perspiciatis recusand
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <ServiceOffer data={ServiceOfferData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
