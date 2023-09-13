import { Link } from "react-router-dom"
import './Button.css'
const CKButtonSmall = ({ title, link }) => {
    return (
        <Link className="btn ck-btn ck-btn-text-2" to={link}>{title}</Link>
    )
}

export default CKButtonSmall