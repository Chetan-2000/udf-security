import { Link } from "react-router-dom"
import './Button.css'
const CKButton = ({ title, link }) => {
    return (
        <Link className="ck-btn-1" to={link}>{title}</Link>
    )
}

export default CKButton