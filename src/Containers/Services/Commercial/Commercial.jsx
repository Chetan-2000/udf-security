import ServicesHome from "../../../Components/Landing/ServicesHome"
import SecurityDescription from "../../../Components/SecurityDescription/SecurityDescription"
import MainServicesData from "../../../assets/MainServicesData"
const Commercial = () => {
    const corporateService = MainServicesData[0].commercial;
    return (
        <div>
            <ServicesHome Breadcrum={"Services / Commercial Complex"} Heading={<>Commercial Complex<br/> Security Services</>} />
            <SecurityDescription data={corporateService} />
        </div>
    )
}

export default Commercial