import React from 'react';
import "./menu.scss";
import kr from "../../assets/images/kr.png";
const Menu = () => {
    return (
        <>
            <section className='menu'>
                <div className="container">
                    <div className="row">
                        <div className="col-10" >
                            <div className="menu-item">
                                <h3 className='active'>Все</h3>
                                <h3>Лаваш</h3>
                                <h3>Шаурма</h3>
                                <h3>Бургеры</h3>
                                <h3>Хот-дог</h3>
                                <h3>Пицца</h3>
                                <h3>Напитки</h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <button className='btn'> <img src={kr} alt="img" /> <span>totol</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;