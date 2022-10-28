import React from 'react'
import { Link } from 'react-router-dom'
import HeaderC from '../header'
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <>
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
           
        </header>
        
		<footer class="footer-distributed">
        <section></section>
            <div class="footer-right">

                <a href="#"><FacebookIcon /></a>
                <a href="#"><TwitterIcon /></a>
                <a href="#"><LinkedInIcon /></a>
                {/* <a href="#"><GitHubIcon /></a> */}

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
        </>
      

    )
}
export {LandingPage}


