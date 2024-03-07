import React from 'react';
import logo from '../../assets/images/ally-assistance-icon-75.png';
import WSLogo from '../../assets/images/wahab-sharif-logo-4.svg';
// import NavSocials from '../Navs/NavSocials';

function Footer() {
    return (
        <footer className="footer" style={{ position: 'relative', width: '100%' }}>
            <div className="footer--wrapper">
                <div className="container">
                    <div className="footer--header">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="footer--logo">
                                    <a href="/">
                                        <img src={logo} alt="footer" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer--paragraph">
                                    <h3 className="heading heading-large light-1">
                                        "Explore Beyond Boundaries: Your Journey, Our Expertise."
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--details">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <div className="detail-single footer-phone-number">
                                    <h6>PHONE</h6>
                                    <a href="tel:441215824316">
                                        <h4>+44 121 582 4316</h4>
                                    </a>
                                </div>
                                {/* <div className="detail-single footer-address">
                                    <h6>ADDRESS</h6>
                                    <h4>581 Stratford Road, Sparkhill, Birmingham, B11 4LS</h4>
                                </div> */}
                            </div>
                            {/* <div className="col-lg-4">
                                <div className="detail-single footer-email">
                                    <h6>ENQUIRIES</h6>
                                    <a href="/mailto:hello@example.com">
                                        <h4>hello@example.com</h4>
                                    </a>
                                </div>
                                <div className="detail-single">
                                    <NavSocials />
                                </div>
                            </div> */}
                            <div className="col-lg-4">
                                <div className="detail-single">
                                    <div className="email-form">
                                        <label>SUBSCRIBE</label>
                                        <div className="email-form-field">
                                            <span className="email">
                                                <input type="email" name="email" placeholder="Email address" />
                                            </span>
                                            <button type="submit">
                                                <i className="fas fa-check-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-sm-12 column">
                                    <div class="copyright">
                                        <a href="/">Ally assistance Ltd</a> &copy; {new Date().getFullYear()}. All Right
                                        Reserved
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 col-sm-12 column">
                                    <ul class="footer-nav">
                                        <li>
                                            <span>Develop With Passion by</span>
                                            <a href="https://wahabsharif.me/" target="_blank" rel="noreferrer">
                                                <img src={WSLogo} alt=""></img>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
