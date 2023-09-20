import OverviewImg from '../Assets/OverviewImg.png'

const Description = () => {
    return (
        <div className="ck-main-container-top bg-white d-flex align-items-center">
            <div className="container">
                <h3 className='fw-600'><span className='ck-tomato'>Who</span> We Are?</h3>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="overview-image">
                            <img src={OverviewImg} className="img-fluid" alt="overview-image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="ck-text-1">
                            Founded in 1989, ESN is the world's leading global, integrated security company specializing in the delivery of security and related services to customers across six continents. The company today has more than 135,000 employees with 6 Hubs and a strong network of over 131 Branches and Area Offices across India. Besides its core business of Secure Solutions, Facilities Management, and Security Systems, G4S offers a range of services including; Training, Event Security, Security Consultancy & Risk Management, Central Monitoring Services, Fire Audit, Recruitment & Placement and Garment/Uniform Manufacturing.
                        </p>
                        <p className="ck-text-1">
                            ESN is proud to have an impressive clientele in various sectors including business process outsourcing, retail, healthcare, infrastructure, IT, banking, diplomatic missions & embassies, residential, hospitality, communication and aviation.
                        </p>
                    </div>
                </div>
                <p className='ck-text-1 mt-5'>
                    ESN India offers a range of services which includes:
                </p>
                <ul>
                    <li className='ck-text-2'>
                        Secure Solutions
                    </li>
                    <li className='ck-text-2'>
                        Secure Systems
                    </li>
                    <li className='ck-text-2'>
                        Facilities Management
                    </li>
                    <li className='ck-text-2'>
                        Garment Manufacturing
                    </li>
                    <li className='ck-text-2'>
                        Recruitment & Placement
                    </li>
                </ul>
                <p className='ck-text-1 mt-3'>
                    ESN, part of Allied Universal®, is a global business with operations in more than 80 countries. We employ more than 800,000 people, making us one of the world's largest private employers.  </p>
            </div>
        </div>
    )
}

export default Description