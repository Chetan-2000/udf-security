import { Link } from "react-router-dom";
import './Cards.css'
import CKButtonSmall from "../Button/CKButtonSmall";

const ServiceOffer = ({ data }) => {
    return (
        <div className="row">
            {data.map((n, i) => (
                <div key={i} className="col-lg-6 col-md-12 col-sm-12 service-card-container" style={{ marginTop: i >= 2 ? 30 : "" }}>
                    <div className="w-100 h-100 service-offer-card p-5">
                        <div>{n.icon}</div>
                        <h4 className=" mt-4">
                            {n.heading}
                        </h4>
                        <p className="my-4">{n.paragraph}</p>
                        <CKButtonSmall link={n.link} title={"Read more"} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServiceOffer