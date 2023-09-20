import MissionVissionCard from "../../../Components/Cards/MissionVissionCard"
import MissionImg from '../Assets/mission.png'
import VisionImg from '../Assets/vision.png'
const MissionVission = () => {
    const data = [
        {
            heading: "Mission",
            imgPath: MissionImg,
            desc: 'Reach every corner of the country through our comprehensive services and innovations in the field of facility management, environment, agriculture and emergency services.'
        },
        {
            heading: "Vision",
            imgPath: VisionImg,
            desc: 'Our vision is to contribute to and catalyze India’s rapid progress towards being a developed country by 2030. We also envisage social, economic, and ecological empowerment by generating employment for Indian citizens and making India a healthier and better place to live through innovations in the environment sector.'
        }
    ]
    return (
        <div className="ck-main-container bg-light d-flex align-items-center">
            <div className="container">
                <div className="text-center">
                    <p className="ck-text-1 text-center position-relative d-inline">
                        Our Mission and Vission
                        <span className="position-absolute bottom-divider"></span>
                    </p>
                </div>
                <div className="">
                    <MissionVissionCard data={data} />
                </div>
            </div>
        </div>
    )
}

export default MissionVission