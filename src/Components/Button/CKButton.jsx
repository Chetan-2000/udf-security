import { Link } from "react-router-dom"
import './Button.css'
const CKButton = ({ title, link }) => {
    return (
        <Link className="btn ck-btn ck-btn-text" to={link}>{title}</Link>
    )
}

export default CKButton