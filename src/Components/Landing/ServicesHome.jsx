import './Landing.css'

const ServicesHome = ({ Breadcrum, Heading, Paragraph }) => {
    // Split the breadcrumb into words
    const breadcrumbWords = Breadcrum.split(' ');

    // Get the last word
    const lastWord = breadcrumbWords.pop();

    // Join the words back together, separating them with spaces
    const updatedBreadcrumb = breadcrumbWords.join(' ');

    return (
        <div className="ck-40-container ck-services-bg d-flex align-items-center">
            <div className="container">
                <p className="text-white">
                    {updatedBreadcrumb} <span className="ck-iris-blue">{lastWord}</span>
                </p>
                <h2 className="text-white mt-3">
                    {Heading}
                </h2>
                {/* <p className="text-white mt-3 ck-text-1">
                    {Paragraph}
                </p> */}
            </div>
        </div>
    )
}

export default ServicesHome