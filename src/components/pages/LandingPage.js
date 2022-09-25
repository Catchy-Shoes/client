import React from 'react'
import { Link } from 'react-router-dom'
import HeaderC from '../header'
import '../styles/footer.css'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const LandingPage=()=> {
    return (
        <header style={ HeaderStyle }>
            <HeaderC />
            <div className=" LandinContent ">
                <h1 className="main-title text-left">CATCHY SHOES</h1>
                <p className="main-para text-left">Your favourite shoe store</p>
                <div className="buttons text-left" >
                    <Link to="/login">
                        <button className="primary-button-login">log in</button>
                    </Link>
                    <Link to="/register">
                        <button className="primary-button-register" id="reg_btn"><span>register </span></button>
                    </Link>
                </div>
            </div>
           <section></section>
          
{/* <section>Footer Example 3</section> */}

		<footer class="footer-distributed">

			<div class="footer-right">

				<a href="#"><i class="fa fa-facebook"></i></a>
				<a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>

			</div>

			<div class="footer-left">

				<p class="footer-links">
					<a class="link-1" href="#">Home</a>

					<a href="#">Pricing</a>

					<a href="#">About</a>

					<a href="#">Faq</a>

					<a href="#">Contact</a>
				</p>

				<p>Catchy Shoes &copy; 2022</p>
			</div>

		</footer>
        </header>

    )
}
export {LandingPage}


