import React from 'react';

import ClientSection from '../components/ClientComponents/ClientSection';
import Testimonial from '../components/Testimonial/Testimonial';
import VideoSection from '../components/Sections/VideoSection';
import TextAboutSection from '../components/Misc/TextAboutSection';
import CallToAction from '../components/Misc/CallToAction';
import ProjectHeader from '../components/Headers/ProjectHeader';

import ProjectsSection from '../components/ProjectComponents/ProjectsSection';

const Home1 = () => {
    return (
        <>
            {/* Video section - start */}
            <VideoSection />
            {/* Video section - end */}

            {/* About section - start */}
            <TextAboutSection />
            {/* About section - end */}

            {/* Projects section - start */}
            <div className="projects">
                <div className="projects-wrapper">
                    <ProjectHeader
                        heading={'Secure your summer booking now.'}
                        paragraph={'Now is the perfect moment to seize the finest deals for your getaways this year.'}
                    />
                    <ProjectsSection />
                    <CallToAction
                        wrapperClass="projects-footer bg-black"
                        headingClass="light-1"
                        heading={
                            <>
                                Do you have plans in the works?
                                <br />
                                Let’s get it done right!
                            </>
                        }
                        buttonText="Let's Plan Together"
                        buttonLink="tel:+441215824316"
                        buttonType="1"
                    />
                </div>
            </div>
            {/* Projects section - end */}
            {/* Clients section - start */}
            <ClientSection />
            {/* Clients section - end */}

            {/* Testimonials section - start */}
            <Testimonial />
            {/* Testimonials section - end */}
        </>
    );
};

export default Home1;
