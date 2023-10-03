import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"
const Residential = () => {
    const corporateService = MainServicesData[0].residential;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Residential"} Heading={<>Residential / Construction<br /> Site Security</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Residential