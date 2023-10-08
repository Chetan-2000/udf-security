import './style.css'

const TrainingCard = ({ data }) => {
    return (
        <>
            {
                data.map((item) => (
                    <div key={item} className={`ck-main-container ${item.key === 'odd' ? 'bg-light' : 'bg-white'}`}>
                        <div className="container">
                            <div className="row">
                                <div
                                    className={`col-lg-6 col-md-12 col-sm-12 col-12 ${item.key === 'odd' ? 'order-lg-1 ' : ''}`}
                                >
                                    <h3 className="fw-600">
                                        {item.heading.split(' ').map((word, index, array) => (
                                            <span key={index} className={index === array.length - 1 ? 'ck-iris-blue' : ''}>
                                                {word}
                                                {index < array.length - 1 && ' '}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="ck-text-1">
                                        {item.paragraph}
                                    </p>
                                </div>
                                <div
                                    className={`col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center ${item.key === 'even' ? 'order-lg-2 ' : ''}`}>
                                    <div className='training-card-img-container cursor-pointer'>
                                        <img src={item.imgUri} className="img-gluid training-card-image" alt="training-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default TrainingCard