import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription";
import MainServicesData from "../../../assets/MainServicesData";

const Bank = () => {
    const corporateService = MainServicesData[0].bank;

    return (
        <div>
            <ServicesHome Breadcrum={"Services / Bank"} Heading={<>Bank<br /> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Bank