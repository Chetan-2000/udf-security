import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"
const Industrial = () => {
    const corporateService = MainServicesData[0].industrial;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Industrial"} Heading={<>Industrial<br/> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Industrial