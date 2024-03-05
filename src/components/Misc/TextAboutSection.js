import React from 'react';
import Heading from '../Headers/Heading';
import { Link } from 'react-router-dom';

function TextAboutSection() {
    return (
        <div className="text-about-section">
            <div className="text-about-section-wrapper">
                <div className="container">
                    <Heading
                        heading={<h1>Our ability to unite people is unparalleled.</h1>}
                        headingClass="heading-very-large dark-1"
                        paragraphClass="dark-2"
                        headingColumn="col-lg-9"
                    />
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <h4>
                                    We are a highly acclaimed company specializing in corporate travel, meetings, and
                                    events management, with multiple awards to our name.
                                </h4>
                            </div>
                            <div className="col-lg-6 col-md-6 content-second-column">
                                <div className="paragraph dark-1">
                                    <p>
                                        We prioritize business connections, understanding your culture, people, and
                                        customers. Our exceptional service, comprehensive support, and cost control
                                        include award-winning technology for travel, meetings, and events.
                                    </p>
                                    <p
                                        style={{
                                            height: 'auto',
                                        }}
                                    >
                                        &nbsp;
                                    </p>
                                    <p>
                                        We prioritize safety, duty of care, and well-being in business travel. With 24/7
                                        support and robust risk management, we ensure value, efficiency, and sustainable
                                        practices.
                                    </p>
                                </div>
                                <Link className="button" to="/About">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextAboutSection;
