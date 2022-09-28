import './Frontpage.css';
import React from "react";
import Profile from "./profilephoto.jpg";
import Profile2 from "./profilephoto2.jpg";
import Profile3 from "./profilephoto3.jpg";

const Frontpage = () => {
    return (
        <div class="frontpage">
            <br></br>
            <h1>Hello world, I'm Nathan, an Indonesian currently studying at Singapore University of Technology and Design (SUTD).</h1>
            <br></br>
            <div class="cards">
                <div class="card">
                    <img class="card-img-top" src={Profile} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title"><em><b>Travel Blogs</b></em></h5>
                        <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <br></br>
                        <a href="/blog" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Profile2} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title"><em><b>Portfolios</b></em></h5>
                        <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <br></br>
                        <a href="/portfolio" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Profile3} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title"><em><b>Computer Science and Design</b></em></h5>
                        <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                        <br></br>
                        <a href="/" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Frontpage;