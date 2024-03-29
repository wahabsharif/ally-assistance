import React from 'react';

import Heading from '../Headers/Heading';
import Video from '../Misc/Video';
import Art from '../Misc/Art';

import video from '../../assets/main-banner-video.webm';
import illustration from '../../assets/images/art_1.png';

function VideoSection() {
    return (
        <>
            <div className="video-section top-section position-relative">
                <div className="video-container">
                    <Video video={video} muted autoPlay playsInline="" preload="auto" />
                </div>
                <Art art={illustration} type={'1'} />
                <div className="top-heading">
                    <div className="container">
                        <Heading
                            heading={
                                <h1>
                                    Exceptional <span style={{ color: '#f2a637' }}>journeys</span>, extraordinary{' '}
                                    <span style={{ color: '#333e68' }}>memories.</span>
                                </h1>
                            }
                            headingClass="heading-very-large dark-1"
                            paragraphClass="dark-2"
                            headingColumn="col-lg-9"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoSection;
