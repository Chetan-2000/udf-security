import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"
const Hotel = () => {
    const corporateService = MainServicesData[0].hotel;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Hotel Security"} Heading={<>Hotel<br/> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Hotel