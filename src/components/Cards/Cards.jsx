import React from 'react';
import "./cards.scss"
import Card from '../Card/Card';
const Cards = () => {
    return (
        <>
            <section className='cards-wrapper'>
                <div className="container">
                    <div className="row my-5">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cards;