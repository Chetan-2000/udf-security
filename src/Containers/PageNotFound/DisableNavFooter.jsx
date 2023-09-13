import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"

const DisableNavFooter = ({ children }) => {
    const location = useLocation();
    const [hideComponent, setHideComponent] = useState(false)
    useEffect(() => {
        if (location.pathname === '/404') {
            setHideComponent(false)
        } else {
            setHideComponent(true)
        }
    }, [location])
    return (
        <div>
            {hideComponent && children}
        </div>
    )
}

export default DisableNavFooter