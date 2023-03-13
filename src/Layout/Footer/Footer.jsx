import React from 'react';
import "./footer.scss";
import logo from "../../assets/images/Logo.png";
import ru from "../../assets/images/ru.png";
const Footer = () => {
    return (
        <>
            
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <a href="#">
                                <img width={141} height={31} src={logo} alt="img" />
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <ul>
                                <li>
                                    <a href="#">Главная</a>
                                </li>
                                <li>
                                    <a href="#">Меню</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="lang ">
                                <button className='btn navbar-right-btn'><img src={ru} alt="rus" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;