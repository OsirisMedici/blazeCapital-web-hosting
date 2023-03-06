import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "Trust our expert team to elevate your brand to new heights with our creative solutions that add real value to your Business",
    heading: "Brand Brilliance Package",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "Partner with our team of seasoned brand strategists to gain insights, clarity and guidance on how to create a trusted, high-value brand that speaks directly to your audience.",
    heading: "Strategic Brand Consulting",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "Join our trusted community of marketing professionals and gain access to our exclusive training and resources designed to help you achieve unparalleled Success.",
    heading: "Marketing Mastery Program",
    path: "#",
  },
  {
    image: serviceImage4,
    text: "Let us take the lead with our targeted, results-driven advertising services that deliver real ROI and help your business stand out in a crowded marketplace",
    heading: "Trusted Advertising Services",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "Our team of expert writers and designers will create high-value, creative content that engages and converts your audience, and showcases your brand in the best light.",
    heading: "Creative Content Creation",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "Stay Ahead of the Game: Get a Weekly Feedback Report on Your Brand Advertising Efforts",
    heading: "Doubt-Zero Buddy system",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Discover the Features of Our High-Value, Creative Features and Bonuses "
          text="Your success, our brilliant minds."
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
