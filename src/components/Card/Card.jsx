import React from 'react';
import "./card.scss"
const Card = () => {
    return (
        <>
            <div className="col-lg-3 col-md-6 co-sm-12 mx-auto my-3 px-4">
                <div className="card">
                    <div className="discount discount_top">-10%</div>
                    <div className="image-wrapper">
                        <img src="https://via.placeholder.com/200x200" alt="product image" />
                    </div>
                    <div className="header__body">
                        <div className="title">Product title</div>
                        <div className="description">Product description</div>
                    </div>
                    <div className="header__footer">
                        <div className="price ">
                            <h6>$50132 sum</h6>
                            <span className="discount">$61320</span>
                        </div>
                        <div className="btn_wrpaper">
                            <button className="button">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;