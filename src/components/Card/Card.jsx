import React from 'react';
import "./card.scss"
const Card = () => {
    return (
        <>
            <div className="card">
                <div className="discount">-10%</div>
                <div className="image-wrapper">
                    <img src="https://via.placeholder.com/200x200" alt="product image" />
                </div>
                <div className="title">Product title</div>
                <div className="description">Product description</div>
                <div className="price">
                    $50
                    <span className="discount">$60</span>
                </div>
                <a href="#" className="button">Buy now</a>
            </div> 
        </>
    );
};

export default Card;