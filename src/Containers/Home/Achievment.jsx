import AchievementCard from "../../Components/Cards/AchievementCard"
import AchieveData from "../../assets/AchieveData"

const Achievment = () => {
    return (
        <div className="ck-main-container achievment-bg d-flex align-items-center">
            <div className="container">
                <h2 className="text-white">
                    Our <span className="ck-iris-blue">
                        Achievements
                    </span>
                </h2>
                <div>
                    <AchievementCard data={AchieveData} />
                </div>
            </div>
        </div>
    )
}

export default Achievment