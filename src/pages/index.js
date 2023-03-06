import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import { fiveBrands } from "components/brands/fiveBrands";
import Services from 'sections/services';
import Jackpot from 'sections/jackpot';
import CallToAction from 'sections/call-to-action';
import Support from "sections/support";
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Trusted from 'sections/trusted';
import Company from "sections/company";
import Leads from "sections/leads";
import Subscribe from 'sections/subscribe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Blaze" />
          <Banner />
          <Company/>
          <Jackpot />
          <Leads/>
          <Services />
          <Support />
          <Trusted/>
          <Featured />
          <CallToAction />
          <Testimonials />
          <Pricing />
          {/* <Blogs /> */}
          <FAQ />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
