import ClientsCard from '../../Components/Cards/ClientsCard'
import ClientsData from '../../assets/ClientsData'
import './Clients.css'
import ClientsOverview from './ClientsOverview'
import Home from "./Home"

const Clients = () => {
    return (
        <div>
            <Home />
            <ClientsOverview />
            <ClientsCard data={ClientsData} />
        </div>
    )
}

export default Clients