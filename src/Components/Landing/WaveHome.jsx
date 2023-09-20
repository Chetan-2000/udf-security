import './Landing.css'

const WaveHome = ({ Breadcrum, Heading, Paragraph, Image }) => {
    return (
        <div className="ck-80-container ck-wave-bg bg-main d-flex">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="text-white">{Breadcrum}</p>
                        <h2 className="text-white mt-5">
                            {Heading}
                        </h2>
                        <p className="text-white mt-3 ck-text-1">
                            {Paragraph}
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-lg-block d-none">
                        <div className='w-100  d-flex justify-content-end '>
                            <img src={Image} className="img-fluid ck-wave-banner" alt="ck-wave-banner" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WaveHome