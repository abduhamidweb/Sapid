import React from 'react';
import logo from "../../assets/images/Logo.png";
import HeaderLink from '../../components/HeaderLink/HeaderLink';
import kr from "../../assets/images/kr.png";
import ru from "../../assets/images/ru.png";
import "./header.scss"
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width={141} height={36} className='img-fluid' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <HeaderLink clas={"nav-link active"} txt={"Главная"} />
                            <HeaderLink clas={"nav-link "} txt={"Меню"} />
                            <HeaderLink clas={"nav-link "} txt={"Контакты"} />
                        </ul>
                        <div className="navbar-right">
                            <button className="btn navbar-right-btn" ><img src={kr} alt="img" /> <span className='txt'>Карзина</span></button>
                            <button className='btn navbar-right-btn'><img src={ru} alt="rus" /></button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;