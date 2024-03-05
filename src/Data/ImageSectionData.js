import image1 from '../assets/images/about/mental-health.png';
import image2 from '../assets/images/about/no-plastic.png';
import image3 from '../assets/images/about/community.png';
import image4 from '../assets/images/about/gender-pay-equity.png';

export const imageSectionData = [
    {
        heading: 'Mental fitness',
        content: (
            <>
                <p>
                    Our Mental Health First Aiders serve as the initial support, guiding our team members who may be
                    facing challenges with their mental well-being.
                </p>
            </>
        ),
        image: {
            src: image1,
            alt: 'image-section-1',
        },
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                    <path d="M7 14a3 3 0 1 0 1 5.83" />
                    <path d="M4.264 15.605a4 4 0 0 1-.874-6.636m.03-.081A2.5 2.5 0 0 1 7 5.5m.238.065A2.5 2.5 0 1 1 12 4.5V20m-4 0a2 2 0 1 0 4 0m0-13a3 3 0 0 0 3 3m2 4a3 3 0 1 1-1 5.83" />
                    <path d="M19.736 15.605a4 4 0 0 0 .874-6.636m-.03-.081A2.5 2.5 0 0 0 17 5.5m-5-1a2.5 2.5 0 1 1 4.762 1.065M16 20a2 2 0 1 1-4 0" />
                </g>
            </svg>
        ),
        title: 'bulb',
    },
    {
        iconNum: 'icon-2',
        heading: 'Avoid the use of disposable plastics',
        content: (
            <>
                <p>
                    In our offices, we firmly reject single-use plastics, prioritizing environmental protection and the
                    cleanliness of our planet.
                </p>
            </>
        ),
        image: {
            src: image2,
            alt: 'image-section-2',
        },
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7c77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58"
                />
                <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M173 253c86 81 175 129 292 147"
                />
            </svg>
        ),
        title: 'arrows',
    },
    {
        iconNum: 'icon-3',
        heading: 'Community festivities',
        content: (
            <>
                <p>
                    Each year, our employees receive one paid community day to contribute their skills and support their
                    local communities, fostering engagement and giving back.
                </p>
            </>
        ),
        image: {
            src: image3,
            alt: 'image-section-3',
        },
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                <path
                    fill="currentColor"
                    d="M8.75 3.75a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0m-4.5 0a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M2.5 7.5h4.183c-.164.31-.286.646-.358 1H2.5A.5.5 0 0 0 2 9v.5c0 1.26 1.099 2.614 3.096 2.93c-.322.22-.59.513-.781.854C2.205 12.713 1 11.087 1 9.5V9a1.5 1.5 0 0 1 1.5-1.5m5.379 0c.504-.61 1.267-1 2.121-1a2.744 2.744 0 0 1 2.646 2a2.753 2.753 0 0 1-3.893 3.202A2.75 2.75 0 0 1 7.88 7.5m.54 1a1.75 1.75 0 1 0 3.164 1.5a1.75 1.75 0 0 0-3.165-1.5m7.266 4.784a2.513 2.513 0 0 0-.781-.853C16.9 12.114 18 10.759 18 9.5V9a.5.5 0 0 0-.5-.5h-3.825a3.726 3.726 0 0 0-.357-1H17.5A1.5 1.5 0 0 1 19 9v.5c0 1.587-1.206 3.212-3.315 3.784m-1.198.087A1.493 1.493 0 0 0 13.5 13h-7A1.496 1.496 0 0 0 5 14.5v.5c0 1.971 1.86 4 5 4c3.14 0 5-2.029 5-4v-.5c0-.45-.198-.854-.513-1.13M6 14.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.5c0 1.438-1.432 3-4 3s-4-1.562-4-3zM14 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1m0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 14 2"
                />
            </svg>
        ),
        title: 'arrows',
    },
    {
        iconNum: 'icon-4',
        heading: 'Wage gap between genders',
        content: (
            <>
                <p>We acknowledge past pay disparities and commit to equal recognition regardless of gender.</p>
            </>
        ),
        image: {
            src: image4,
            alt: 'image-section-3',
        },
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646l.822.822A4 4 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949l-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0zm5.49 4.856a3 3 0 1 0 5.02 3.288a3 3 0 0 0-5.02-3.288"
                />
            </svg>
        ),
        title: 'arrows',
    },
];
