import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockTitle from 'components/block-title';
import shadows from '../theme/shadows.module.css';
import TestimonialsCard from 'components/cards/testimonial-card';
import testimonialsImage1 from 'assets/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonial-1-6.png';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: "Blaze Capital Marketing Agency has exceeded our expectations in every way. Their team is knowledgeable, responsive, and always goes the extra mile to ensure our marketing campaigns are successful.",

      name: "John Doe, CEO",
    },
    {
      image: testimonialsImage2,
      text: "We've been working with Blaze Capital for over a year now and they've helped us increase our online presence and drive more traffic to our website. Their team is professional, creative, and always delivers quality work.",

      name: "Jane Smith, Marketing Manager",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Blaze Capital is the real deal when it comes to digital marketing. They helped us develop a comprehensive strategy that increased our sales and ROI.. Thank you",
      name: "Tom Johnson, COO ",
    },
    {
      image: testimonialsImage4,
      text: "Blaze Capital has been a game-changer for our business. They helped us build a strong brand and establish ourselves as a thought leader in our industry. Their team is highly skilled and always goes above and beyond.",

      name: "Sarah Brown, Owner",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",

      name: "Michael Davis, CEO",
    },
    {
      image: testimonialsImage6,
      text: "Blaze Capital helped us revamp our website and develop a content marketing strategy that resulted in a significant increase in traffic and leads. Their team is reliable, responsive, and highly skilled.",
      name: "Tim Smith, Marketing Director",
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: "Blaze Capital's expertise in digital marketing has been invaluable to our business. They're always on top of the latest trends and technologies and provide us with the guidance we need to stay ahead of the competition.",
      name: "Lisa Johnson, CEO",
    },
    {
      image: testimonialsImage2,
      text: "Working with Blaze Capital has been a pleasure. Their team is knowledgeable, responsive, and always delivers high-quality work. We highly recommend their services.",
      name: "Mark Brown, Marketing Manager",
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: "Blaze Capital helped us increase our social media presence and develop a strong online community. Their team is creative, strategic, and highly effective. Thank you",
      name: "Rachel Smith, Director",
    },
    {
      image: testimonialsImage4,
      text: "We're extremely happy with the results we've seen since working with Blaze Capital. Their team helped us optimize our website and develop a PPC campaign that generated a significant increase in leads and sales.",
      name: "James Johnson, CMO",
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: "Thank you for all your help. Your service was excellent and very FAST.",
      name: "Cherice Justin",
    },
    {
      image: testimonialsImage6,
      text: "Blaze Capital's dedication to our success is unparalleled. Their team is always available to answer our questions and provide us with the support we need to achieve our marketing goals.",
      name: "Samantha Brown, Owner",
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      
        <div className={shadows.title}> Trusted by Top Brands - Hear What They Have to Say About Us. </div>
        <div className={shadows.Subtitle}> Customer testimonial</div>
    
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index} id={shadows.testimonials}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#000000',
    pt: ['80px', null, null, null, '10px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
