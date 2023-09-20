import OverviewImg from '../Assets/OverviewImg.png'

const Description = () => {
    return (
        <div className="ck-main-container-top bg-white d-flex align-items-center">
            <div className="container">
                <h2>Overview</h2>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="overview-image">
                            <img src={OverviewImg} className="img-fluid" alt="overview-image" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <p className="ck-text-1">
                            Behind every company, there’s a thought, dream, and a story that constitute its inception, ideologies, and objectives. BVG India was founded around three decades ago with a vision and two socially-inclined goals of developing India and helping the poor and the needy. We aren’t merely a profit-making or a service-based enterprise. Instead, we are a socially responsible and concerned organization aiming to make the world a better place to live through extensive R&D and breakthrough innovations across various essential and critical areas concerning society and the environment.
                        </p>
                        <p className="ck-text-1">
                            Although our journey began with smaller facility management projects, we did not confine ourselves to facility management. Over the years, we’ve spread our wings to venture into other areas such as waste management, emergency services, renewable energy, robotic parking systems, etc. Today, we proudly share that we’ve been the housekeeping partners of Rashtrapati Bhavan, Sansad, Supremecourt etc for over a decade and continue to serve it delightfully!
                        </p>
                    </div>
                </div>
                <p className='ck-text-1'>
                    At BVG India, we take our commitments seriously and work towards delivering the value our clients, stakeholders, and society expects from us. Our technical expertise across various domains, including environment, waste management, facility management, etc., and our objective and vision to contribute to a sustainable future make us a preferred social corporate partner and a promising avenue to invest and believe in. So, let us collaborate, craft a bright future and contribute to India’s endeavors in becoming a developed country!
                </p>
            </div>
        </div>
    )
}

export default Description