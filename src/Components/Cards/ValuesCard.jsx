import React, { useState, useEffect } from 'react';

const ValuesCard = ({ data }) => {
    const colors = ['#ecefff', '#cfffee', '#cef1ff', '#ffefb3'];
    const [flippedIndex, setFlippedIndex] = useState(-1);

    const handleCardClick = (index) => {
        if (flippedIndex === index) {
            // If the clicked card is already flipped, unflip it.
            setFlippedIndex(-1);
        } else {
            // Flip the clicked card.
            setFlippedIndex(index);
        }
    };

    useEffect(() => {
        let currentCardIndex = 0;

        const interval = setInterval(() => {
            if (currentCardIndex >= data.length) {
                clearInterval(interval); // Stop the interval when all cards have been flipped.
            } else {
                setFlippedIndex(currentCardIndex);
                currentCardIndex++;
            }
        }, 3000); // Adjust the interval time (in milliseconds) as needed.

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount.
        };
    }, [data.length]);

    return (
        <div className="row">
            {data.map((n, i) => (
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mt-5" key={i}>
                    <div
                        className={`values-card h-100 w-100 ${flippedIndex === i ? 'flipped' : ''}`}
                        style={{ backgroundColor: colors[i] }}
                        onClick={() => handleCardClick(i)}
                    >
                        <div className={`card-face front ${flippedIndex === i ? 'hidden' : ''}`}>
                            <div className="p-3 text-center">
                                <img src={n.imgPath} className="img-fluid" alt={n.imgPath} />
                            </div>
                            <div>
                                <p className="ck-text-1 text-center my-3">
                                    {n.heading}
                                </p>
                            </div>
                        </div>
                        <div className={`card-face back ${flippedIndex === i ? '' : 'hidden'}`}>
                            <div className="p-3 text-center">
                                <p className='ck-text-2'>{n.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ValuesCard;
