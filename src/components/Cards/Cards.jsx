import React from 'react';
import "./cards.scss"
import Card from '../Card/Card';
const Cards = () => {
    return (
        <>
            <section className='cards-wrapper'>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-3 col-md-6 co-sm-12 mx-auto my-3 px-4">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cards;