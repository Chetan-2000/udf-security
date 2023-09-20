import WaveHome from '../../../Components/Landing/WaveHome'
import OverviewBanner from '../Assets/overview-banner.png'

const Home = () => {
    return (
        <WaveHome
            Breadcrum={"Home / About Us"}
            Heading={<> Welcome to<br />XYZ Security</>}
            Paragraph={"G4S is the leading global integrated security company specialising in the provision of security products, services and solutions."}
            Image={OverviewBanner}
        />
    )
}

export default Home