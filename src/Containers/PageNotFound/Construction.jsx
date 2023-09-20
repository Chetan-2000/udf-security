import { Link } from 'react-router-dom'
import UnderConImg from './under-con.jpg'

const Construction = () => {
    return (
        <div className="ck-container text-center construction-bg position-relative">
            <img src={UnderConImg} alt="page-not-found" className="img-fluid pnf-img" />
            <Link to={'/'} className='ck-btn-pill position-absolute pnf-btn'>Go To Home</Link>
        </div>
    )
}


export default Construction