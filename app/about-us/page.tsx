import AboutStats from '@/components/about/about-stats';
import CorporateValues from '@/components/about/core-values-section';
import CtaBanner from '@/components/about/cta-banner';
import AboutHero from '@/components/about/hero';
import MissionVisionSection from '@/components/about/mission-vision-section';
import SetsApart from '@/components/about/sets-apart';
import React from 'react';

function AboutPAge() {
  return (
    <main>
      <AboutHero />
      <AboutStats />
      <MissionVisionSection />
      <CorporateValues />
      <SetsApart />
      <CtaBanner />
    </main>
  );
}

export default AboutPAge;
