const ClientsCard = ({ data }) => {
    return (
        <div className="ck-main-container-top d-flex align-items-center">
            <div className="container">
                <div className="row">
                    {data.map((data, index) => (
                        <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 h-100">
                            <div className="h-100 w-100 p-2 d-flex align-items-center justify-content-center client-image-box">
                                <img src={data.imgPath} className="img-fluid client-card-img" alt={data.companyName} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClientsCard