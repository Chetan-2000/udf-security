import WaveHome from "../../../Components/Landing/WaveHome"
import WhoWeAreBanner from '../Assets/WhoWeAreBanner.png'

const Home = () => {
    return (
        <WaveHome
            Breadcrum={"Home / Who We Are"}
            Heading={<>Who We<br />Are ?</>}
            Paragraph={"G4S is the leading global integrated security company specialising in the provision of security products, services and solutions."}
            Image={WhoWeAreBanner}
        />
    )
}

export default Home