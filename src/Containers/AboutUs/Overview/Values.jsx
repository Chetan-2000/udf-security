import MissionVissionCard from "../../../Components/Cards/MissionVissionCard"
import ValuesCard from "../../../Components/Cards/ValuesCard"
import IntegrityImg from '../Assets/integrity.svg';
import SafetyImg from '../Assets/safety.svg';
import CustomerImg from '../Assets/customer.svg';
import ContinousImg from '../Assets/continuous.svg'
const Values = () => {
    const data = [
        {
            heading: "Integrity and Professionalism",
            imgPath: IntegrityImg,
            desc: 'We uphold high ethical standards and professionalism in all we do'
        },
        {
            heading: "Safety is Our main Priority",
            imgPath: SafetyImg,
            desc: 'We prioritize the safety of clients, assets, and our personnel through rigorous protocols'
        },
        {
            heading: "Customer-Centric Approach",
            imgPath: CustomerImg,
            desc: 'Covering the nation with cutting-edge facility management, environmental, agricultural, and emergency services'
        },
        {
            heading: "Continuous Training and Innovation",
            imgPath: ContinousImg,
            desc: ' We invest in ongoing training and technology to stay ahead of security challenges.'
        }
    ]
    return (
        <div className="ck-main-container bg-white d-flex align-items-center">
            <div className="container">
                <div className="text-center">
                    <h3 className="fw-600 text-center my-3">
                        Our <span className="ck-iris-blue">Values</span>
                    </h3>
                </div>
                <div className="">
                    <ValuesCard data={data} />
                </div>
            </div>
        </div>
    )
}

export default Values