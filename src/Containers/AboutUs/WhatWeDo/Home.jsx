import WaveHome from "../../../Components/Landing/WaveHome"
import WhatWeDoBanner from '../Assets/WhatWeDo.png'

const Home = () => {
    return (
        <WaveHome
            Breadcrum={"Home / What We Do"}
            Heading={<>What We<br />Do?</>}
            Paragraph={"Our team has years of knowledge and understanding of multiple sectors including; Aviation, Education, Financial Institutions, Government, Healthcare, Industrial, Leisure and Tourism, Oil and Gas, Ports, Energy and Utilities, Transport and Logistics, Retail and Commercial Estates. No matter the sector, we remain focused on providing the best combination of people, risk, technology and data services, specifically tailored to our customers needs."}
            Image={WhatWeDoBanner}
        />
    )
}

export default Home