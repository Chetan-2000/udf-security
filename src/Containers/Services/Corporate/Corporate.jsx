import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"

const Corporate = () => {
    const corporateService = MainServicesData[0].corporate;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Corporate"} Heading={<>Corporate<br /> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Corporate