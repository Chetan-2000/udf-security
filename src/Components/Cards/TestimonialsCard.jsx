const TestimonialsCard = ({ data }) => {
    return (
        <div>
            {data.map((n, i) => (
                <div className="w-100 h-100 testimonals-card item p-5">
                    <p className="ck-text-2 text-white">
                        {n.paragraph}
                    </p>
                    <div className="d-flex align-items-center">
                        <img className="img-fluid testimonials-image" src={n.imgPath} alt="img" />
                        <div>
                            <p className="ck-text-2 ck-tomato">
                                {n.testName}
                            </p>
                            <p className="ck-text-2 text-white">
                                {n.testDate}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TestimonialsCard