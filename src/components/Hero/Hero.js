import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
    As a personal mission, I strive to be self-motivated and eager to learn and get more exposure to the tools and technologies that are being used.
    </SectionText>
  </LeftSection>
</Section>
);

export default Hero;