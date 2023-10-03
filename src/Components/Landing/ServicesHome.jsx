import './Landing.css'

const ServicesHome = ({ Breadcrum, Heading, Paragraph }) => {
    return (
        <div className="ck-40-container ck-services-bg d-flex align-items-center">
            <div className="container">
                <p className="text-white">{Breadcrum}</p>
                <h2 className="text-white mt-3">
                    {Heading}
                </h2>
                <p className="text-white mt-3 ck-text-1">
                    {Paragraph}
                </p>
            </div>
        </div>
    )
}

export default ServicesHome