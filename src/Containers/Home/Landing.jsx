import { Link } from "react-router-dom"
import CKButton from "../../Components/Button/CKButton"

const Landing = () => {
    return (
        <div className="main-container home-banner d-flex align-items-center">
            <div className="container">
                <div>
                    <h1 className="text-white">
                        Secure your
                        <br />
                        space, secure your life.
                    </h1>
                    <p className="ck-text-1 text-white mt-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit doloremque<br /> animi tempore illum nobis praesentium ab.
                    </p>
                    <CKButton title={"Discover more"} link={"/"} />
                    {/* <div>
                        <Link to={'/'} className="ck-btn-1">Discover more</Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Landing