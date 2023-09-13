import { Link } from "react-router-dom"
import './Button.css'
const CKButtonSmall = ({ title, link }) => {
    return (
        <Link className="ck-btn-2" to={link}>{title}</Link>
    )
}

export default CKButtonSmall