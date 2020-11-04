import React from 'react';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <div className="container mt-4 pt-1 pb-5 mb-5 pr-5 pl-5 rounded">
                <div className="row">
                    <div className="col-12 mt-3 pt-2 pb-3 mb-4 border-bottom border-dark d-flex">
                        <h1>About Me</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src="/images/4L8A8908.jpeg" width="200" height="200" className="img-thumbnail float-left mr-3 mb-3 p-0 rounded border col-sm-12 col-md-4" />
                            <div className="col-xs-12">
                                <p>
                                    Hello my name is Nodirbek Maksudov and I'm Full Stack Web Developer with a Web Development Certificate from the University of Pennsylvania. I'm from Uzbekistan and currently living in Philadelphia since 2009. The reason why I have joined this Bootcamp is that I would like to do a carrier change with the help of newly knowledge that I have gained I think I will be able to find a job as a Web Developer, please checkout my portfolio and you can contact me anytime!
                                </p>
                                <a href="https://github.com/Nodirbek94" target="_blank"><i className="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/nodirbek-maksudov-a74788186/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                <a href="mailto:nodirbekmaksudov@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                                <a href="tel:2675547743" target="_blank"><i className="fas fa-phone-square"></i></a>
                                <a href="https://www.instagram.com/nodir57/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.facebook.com/nodirbek.maksudov/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection