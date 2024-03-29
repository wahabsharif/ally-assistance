import React from 'react';

function Deals() {
    return (
        <>
            <>
                {/* Grid */}
                <div className="deals-heading">
                    <h2>Discover the World...</h2>
                </div>
                <section className="deals">
                    <div>
                        <img src="/assets/imgs/deals/united-kingdom-travel_4x3.jpg" alt="First description" />
                        <span className="description">
                            Top Tours in 2024
                            <br />
                            Save upto £ 1,300
                        </span>
                    </div>
                    <div>
                        <img
                            src="/assets/imgs/deals/Eilean-Donan-Castle-against-sunset-in-Scottish-Highlands-Scotland-UK-United-Kingdom-_511238509-768x533.jpg"
                            alt="Second description"
                        />
                        <span className="description">
                            Wanderlust Adventures
                            <br />
                            Starts From £ 2,050
                        </span>
                    </div>
                    <div>
                        <img src="/assets/imgs/deals/0c87c4069e7d14f97a90a1b7b6325f59.jpg" alt="Third description" />
                        <span className="description">
                            Journey Beyond Horizons
                            <br />
                            Starts From £ 1,400
                        </span>
                    </div>
                    <div>
                        <img
                            src="/assets/imgs/deals/mnhp8qabhq_depositphotos_edinburgh_43431327_xl-2015_960x960.webp"
                            alt="Fourth description"
                        />
                        <span className="description">
                            Exciting Expeditions to Reserve Today
                            <br />
                            Starts From £ 1,690
                        </span>
                    </div>
                    <div>
                        <img src="/assets/imgs/deals/shutterstock-1041475570-1.jpg" alt="Fifth description" />
                        <span className="description">
                            Top Tours for 2025
                            <br />
                            Starts From £ 1,890
                        </span>
                    </div>
                    <div>
                        <img src="/assets/imgs/deals/specials-images.jpg" alt="Sixth description" />
                        <span className="description">
                            Luxurious Tours by Private Jet
                            <br />
                            Starts From £ 2,500
                        </span>
                    </div>
                </section>
            </>
        </>
    );
}

export default Deals;
