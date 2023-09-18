import { Link } from 'react-router-dom'
import PNFImg from './404.jpg'

const PageNotFound = () => {
    return (
        <div className="ck-container text-center pnf-bg position-relative">
            <img src={PNFImg} alt="page-not-found" className="img-fluid pnf-img" />
            <Link to={'/'} className='ck-btn-pill position-absolute pnf-btn'>Go To Home</Link>
        </div>
    )
}


export default PageNotFound