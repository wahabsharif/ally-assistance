import React from 'react';

function PhoneCall() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div className="floating_btn">
                <a target="_blank" href="tel:441215824316" rel="noreferrer">
                    <div className="contact_icon">
                        <i className="fa fa-phone my-float" />
                    </div>
                </a>
            </div>
        </>
    );
}

export default PhoneCall;
