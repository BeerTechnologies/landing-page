import Head from 'next/head';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/Hero';
import { ProgramsSection } from '@/components/sections/Programs';
import { DeliveryModelSection } from '@/components/sections/DeliveryModel';
import { OurStorySection } from '@/components/sections/OurStory';
import { MissionVisionSection } from '@/components/sections/MissionVision';
import { ValuesSection } from '@/components/sections/Values';
import { WaitlistSection } from '@/components/sections/Waitlist';
import { siteMetadata } from '@/data/siteMetadata';

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/btech_logo.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:image" content={siteMetadata.ogImage} />
        <meta property="og:url" content={siteMetadata.url} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
        <meta name="twitter:image" content={siteMetadata.ogImage} />
      </Head>
      <Layout>
        <HeroSection />
        <ProgramsSection />
        <DeliveryModelSection />
        <OurStorySection />
        <MissionVisionSection />
        <ValuesSection />
        <WaitlistSection />
      </Layout>
    </>
  );
}
