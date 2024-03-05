import React from 'react';

function TextContentInner(props) {
    return (
        <>
            <div className="text-content-inner">
                <div className="container">
                    <div className="row">
                        {props.content.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className={`col-lg-8 ${index === 1 ? 'second-column' : ''}`}>
                                    <div className="paragraph light-1">
                                        <p className="text-align-justify">{item.content}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextContentInner;
