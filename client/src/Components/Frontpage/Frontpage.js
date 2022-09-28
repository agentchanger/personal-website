import './Frontpage.css';
import React from "react";
import Profile from "./profilephoto.png";
import Profile2 from "./profilephoto2.png";
import Profile3 from "./profilephoto3.jpg";

const Frontpage = () => {
    return (
        <div class="frontpage">
            <div class="separator"></div>
            <div class="text-intro">
                <h1>Hello world, I'm Nathan, an Indonesian currently studying at Singapore University of Technology and Design (SUTD).
                    Some things about me:
                </h1>
            </div>
            <div class="separator"></div>
            <div class="cards">
                <div class="card">
                    <img class="card-img-top" src={Profile3} alt="Computer Science image"/>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted"><em>Photo taken in front of Digital Systems Lab, SUTD; a memorable room.</em></h6>
                        <br></br>
                        <h5 class="card-title"><em><b>Computer Science</b></em></h5>
                        <p class="card-text">
                        The first time I learned a programming language, Python, I remembered not being able to stop myself.
                        I would stay up till dawn to learn new data structures, functions, and other programming concepts that were very new to me. 
                        </p>
                        <br></br>
                        <a href="/" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Profile2} alt="Indonesia image"/>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted"><em>Photo taken in front of SUTD Sports Hall on 17th Aug 2022, Independence Day of Indonesia.</em></h6>
                        <br></br>
                        <h5 class="card-title"><em><b>Indonesia</b></em></h5>
                        <p class="card-text">
                            I was born and raised in this country, so it's an understatement that I simply <em>liked</em> Indonesia.
                            After all, Bahasa Indonesia is my first language, and my favorite foods happened to be Gado-Gado and Soto Betawi. 
                        </p>
                        <br></br>
                        <a href="/portfolio" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src={Profile} alt="Travelling and Vlogs image"/>
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted"><em>Photo taken at Cloud Forest, Gardens by the Bay, Singapore, 2022.</em></h6>
                        <br></br>
                        <h5 class="card-title"><em><b>Travelling and Vlogs</b></em></h5>
                        <p class="card-text">
                            I'm really into the prospect of getting lost somewhere new.
                            That's why I'm also into photography and videography as a form of documenting my experiences.
                            I also love movies, I mean who doesn't.
                        </p>
                        <br></br>
                        <a href="/blog" class="btn btn-primary">Get to know more</a>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Frontpage;