import type { Metadata } from 'next';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/Hero';
import { ProgramsSection } from '@/components/sections/Programs';
import { DeliveryModelSection } from '@/components/sections/DeliveryModel';
import { OurStorySection } from '@/components/sections/OurStory';
import { MissionVisionSection } from '@/components/sections/MissionVision';
import { ValuesSection } from '@/components/sections/Values';
import { WaitlistSection } from '@/components/sections/Waitlist';
import { siteMetadata } from '@/data/siteMetadata';

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
    url: siteMetadata.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <DeliveryModelSection />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <WaitlistSection />
    </Layout>
  );
}
