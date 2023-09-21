const SectorDataCard = ({ Heading, Paragraph, SectorImage }) => {
    // Split the heading into words
    const words = Heading.split(' ');

    // Create a span for the first word
    const firstWord = <span className="ck-tomato">{words[0]}</span>;

    // Join the rest of the words back together
    const restOfHeading = words.slice(1).join(' ');

    return (
        <div className="">
            <div className="sector-data-card">
                <div className="row ">
                    <div className="col-lg-6 col-mg-12">
                        <div className="sector-image">
                            <img src={SectorImage} className="img-fluid" alt={SectorImage} />
                        </div>
                    </div>
                    <div className="col-lg-6 col-mg-12">

                        <div className='d-lg-block d-none'>
                            <h3 className="fw-600 text-start">
                                {firstWord}
                                <br />
                                {restOfHeading}
                            </h3>
                        </div>

                        <div className='d-md-block d-lg-none'>
                            <h3 className="fw-600 text-start">
                                {firstWord}
                                {" "}
                                {restOfHeading}
                            </h3>
                        </div>
                    </div>
                </div>
                <p className="ck-text-2 mt-4">{Paragraph}</p>
            </div>
        </div>
    )
}

export default SectorDataCard