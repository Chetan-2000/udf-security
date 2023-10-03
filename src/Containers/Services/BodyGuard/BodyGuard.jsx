import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"
const BodyGuard = () => {
    const corporateService = MainServicesData[0].bodyguard;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Bodyguard"} Heading={<>Bodyguard / Bouncers<br/> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default BodyGuard