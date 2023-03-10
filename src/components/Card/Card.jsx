import React from 'react';
import "./card.scss"
const Card = () => {
    return (
        <>
            <div className="card">
                <div className="card__header">
                    <span className="card__discount">-10%</span>
                </div>
                <img
                    className="card__image"
                    src="https://via.placeholder.com/150x150"
                    alt="Product"
                />
                <div className="card__content">
                    <h2 className="card__title">Product Title</h2>
                    <p className="card__description">Product Description</p>
                    <div className="card__footer">
                        <span className="card__price">$90.00</span>
                        <button className="card__button">Add to Cart</button>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default Card;