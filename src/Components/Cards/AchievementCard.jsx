import CountUp from "react-countup"

const AchievementCard = ({ data }) => {
    return (
        <div className="row">
            {data.map((data, index) => (
                <div key={index} className="col-lg-3 col-md-3 col-6">
                    <div className="d-flex flex-column align-items-center mt-5">
                        <h1 className="text-white" style={{fontWeight :400}}>
                            <CountUp duration={2.75} start={0} end={data.number} />
                        </h1>
                        <p className="ck-text-1 text-white">
                            {data.heading}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AchievementCard