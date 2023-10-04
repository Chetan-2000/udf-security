const ContactCard = ({ data }) => {
    return (
        <div className="contact-card">
            {data.map((data, index) => (
                <div key={index} className="row contact-card-container">
                    <div className="col-2">
                        <div className="contact-icon-container d-flex align-items-center justify-content-center pnf-bg">
                            <img src={data.imgPath} className="img-fluid contact-card-img" alt={data.imgPath} />
                        </div>
                    </div>
                    <div className="col-10">
                        <p className="ck-text-1 fw-600 m-0">
                            {data.cardHeading}
                        </p>
                        <p className="ck-text-2 text-secondary">
                            {data.cardContent}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactCard