import testimonial_image from '../assets/images/people_img_4.png';
import testimonial_image_1 from '../assets/images/testimonial-img-2.png';
import testimonial_image_2 from '../assets/images/testimonial-img-3.png';

const testimonials = [
    {
        name: 'Andy Squirrell',
        designation: 'Chief Commercial Officer',
        testimony:
            'Exceptional service! Our travel agency curated a dream vacation, attending to every detail. Seamless, stress-free, and unforgettable. Highly recommend!',
        image: {
            src: testimonial_image,
            alt: 'testimonial image',
        },
    },

    {
        name: 'Michael Rodriguez ',
        designation: 'Tour Coordinator',
        testimony:
            '"Incredible experience with this travel agency! They personalized our journey, making it perfect. Professional, reliable, and exceeded expectations. A top-notch team!"',
        image: {
            src: testimonial_image_1,
            alt: 'testimonial image',
        },
    },

    {
        name: 'Sarah Harper',
        designation: 'Customer Experience Specialist',
        testimony:
            'Outstanding! From booking to the journey  end, this travel agency surpassed expectations. Attention to detail, friendly staff, and a truly memorable adventure. Five stars!',
        image: {
            src: testimonial_image_2,
            alt: 'testimonial image',
        },
    },
];

export default testimonials;
