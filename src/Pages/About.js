import React from 'react';

import Heading from '../components/Headers/Heading';
import AboutText from '../components/AboutComponents/AboutText';
import ImageSection from '../components/Sections/ImageSection';
import TextContent from '../components/TextContent/TextContent';
// import TeamSection from '../components/AboutComponents/TeamSection';
import Testimonial from '../components/Testimonial/Testimonial';
import aboutheaderimage from '../assets/images/about-header.jpg';
import Art from '../components/Misc/Art';
import illustration from '../assets/images/art_1.png';
import { imageSectionData } from '../Data/ImageSectionData';

import logo from '../assets/images/ally-assistance-icon-75.png';

function About() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading
                    heading={<h1>About Us</h1>}
                    headingClass="heading-very-large dark-1"
                    paragraph="As the leading independent travel agency in the UK and the preferred choice of the nation, we offer unparalleled value, service, and a wide range of holiday options both on land and at sea."
                    paragraphClass="dark-2"
                    WrapperComponent={(props) => {
                        return (
                            <div className="page-header-top">
                                <div className="container">{props.children}</div>
                            </div>
                        );
                    }}
                />

                <div className="page-header-bottom">
                    <div className="single-image">
                        <img src={aboutheaderimage} alt="about-header" />
                    </div>
                    <Art art={illustration} type="1" />
                </div>
            </div>
            <AboutText
                image={logo}
                content="With a wealth of experience spanning over four decades, we take great pride in our position as the leading independent travel agent in the UK."
            />
            {imageSectionData.map((imageSection, index) => (
                <ImageSection
                    heading={imageSection.heading}
                    content={imageSection.content}
                    image={imageSection.image}
                    title={imageSection.title}
                    iconNum={imageSection.iconNum}
                    reverse={(index + 1) % 2 === 0}
                    icon={imageSection.icon}
                    key={index}
                />
            ))}

            <TextContent />
            {/* <TeamSection /> */}
            <Testimonial type="5" />
        </>
    );
}

export default About;
