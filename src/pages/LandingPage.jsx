import 'react';
import travel from '../assets/travel.gif';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center this">
                            <h1 data-aos="fade-up">Embark on Your Next Adventure</h1>
                            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                                <img src={travel} className="img-fluid" alt="" />
                            </div>
                            <h2 data-aos="fade-up" data-aos-delay="400">
                                Discover seamless travel planning like never before. 
                                Our intuitive Travel Planner app simplifies every aspect of your journey, 
                                from itinerary creation to real-time updates. Explore breathtaking destinations, 
                                find hidden gems, and make memories that last a lifetime. 
                                Plan, experience, and relish your travels effortlessly with Travel Planner. 
                                Download now and let the journey begin!
                            </h2>
                            <br />
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div className="text-center text-lg-start">
                                    <Link to="/login" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Sign in</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
