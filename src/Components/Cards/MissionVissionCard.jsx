const MissionVissionCard = ({ data }) => {
    return (
        <div className="row">
            {data.map((n, i) => (
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center mt-5" key={i}>
                    <div className="mission-vission-card h-100">
                        <div className="p-3 text-center">
                            <img src={n.imgPath} className="img-fluid" alt={n.imgPath} />
                        </div>
                        <div className="">
                            <h3 className="fw-600 text-center my-3">
                                Our <span className="ck-iris-blue">{n.heading}</span>
                            </h3>
                            <p className="ck-text-2 text-center">
                                {n.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MissionVissionCard