import React, { useState, useEffect } from 'react';
import {Link,Outlet,useNavigate} from 'react-router-dom';
import logo from "../assets/images/img/tesla-logo-png-20.png"
import './style.css';

const HeaderHome = (props) => {
    let navigate = useNavigate();
  const [selected, setSelected] = useState(false);
    return (
        <>
        <header className="header" style={{top:'20px'}}>
		<Link className="header__left" to={"/"} >
            <img className="header__logo" src={logo} alt="" />
            </Link>
        <ul className="header__middle">
			<li className="header__middle_li">
			<li className="header__middle_li"> <Link to={"/Models-car"} className="header__nav__btn">Model S</Link></li>
			<li className="header__middle_li"><Link to={"/Model3-car"} className="header__nav__btn">Model 3</Link></li>
			<li className="header__middle_li"><Link to={"/Modelx-car"} className="header__nav__btn">Model X</Link></li>
			<li className="header__middle_li"><Link to={"/Modely-car"} className="header__nav__btn">Model Y</Link></li>
			<li className="header__middle_li"><Link to={"/Solarroof"} className="header__nav__btn">solar roof</Link></li>
			<li className="header__middle_li"><Link to={"/Solarpanel"} className="header__nav__btn">solar panels</Link></li>
			</li>
		</ul>

		<div className="header__right">
			<a className="header__nav__btn" href="#">shop</a>
			<a className="header__nav__btn" href="#">account</a>
			<a className="header__nav__btn menu__btn" onClick={()=>{navigate('/login')}}>Giriş Yap</a>
		</div>
	</header>
    <nav className={selected?"navigation is--active":"navigation"}>
		<div className="close__btn__container">
			<img className="navigation__close__btn"  onClick={()=>{setSelected(false)}} src="https://thatanjan.github.io/tesla-clone-yt/media/close_icon.svg" alt="" />
		</div>

		<ul>
		<Link to={"/Models-car"} >
		<li className="link__in__middle">Model S</li>
            </Link>
			
			<li className="link__in__middle"><a className="nav__link" href="model3.html">Model 3</a></li>
			<li className="link__in__middle"><a className="nav__link" href="modelx.html">Model X</a></li>
			<li className="link__in__middle"><a className="nav__link" href="modely.html">Model Y</a></li>
			<li className="link__in__middle">
				<a className="nav__link" href="solarroof.html">Solar roofs</a>
			</li>
			<li className="link__in__middle">
				<a className="nav__link" href="solarpanels.html">Solar panels</a>
			</li>
			<li><a className="nav__link" href="#">Existing Inventory </a></li>
			<li><a className="nav__link" href="#">Used Inventory </a></li>
			<li><a className="nav__link" href="#">Trade-In </a></li>
			<li><a className="nav__link" href="#">Test drive </a></li>
			<li><a className="nav__link" href="#">Powerwall </a></li>
			<li><a className="nav__link" href="#">Commercial Energy </a></li>
			<li><a className="nav__link" href="#">utilities </a></li>
			<li><a className="nav__link" href="#">Charging</a></li>
			<li><a className="nav__link" href="#">Find us</a></li>
			<li><a className="nav__link" href="#">Support</a></li>
			<li><a className="nav__link" href="#">Investor Relations</a></li>
		</ul>
	</nav>
    <body>
    <Outlet />
    </body>
        </>
    )
}

export default HeaderHome