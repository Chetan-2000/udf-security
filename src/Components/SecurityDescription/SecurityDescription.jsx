import './style.css'
const SecurityDescription = (props) => {
    const { data } = props;
    console.log(data);
    const words = data.heading.split(' ');
    const lastTwoWords = <span className="ck-iris-blue">{words.slice(-2).join(' ')}</span>;

    return (
        <div className="ck-main-container">
            <div className="container">
                <div className="row p-0 m-0 align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src={data.img} className="img-fluid security-description-img py-5" alt={data.heading} />
                    </div>
                    <div className="col-lg-6 col-md-12">

                        <h3 className="fw-700 ck-dark-blue">
                            {words.slice(0, -2).join(' ')}
                            <br />
                            {lastTwoWords}
                        </h3>
                        <p className="ck-text-1">
                            {data.firstParagraph}
                        </p>
                        <ul>
                            {data.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="ck-text-1">
                            {data.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityDescription