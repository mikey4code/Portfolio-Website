import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, IconContainer } from './AcomplishmentsStyles';
import {  SiUdemy } from 'react-icons/si';

const Acomplishments = () => (
  <Section>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
      <Box>
        <IconContainer><SiUdemy size="3rem" /></IconContainer>
        <BoxNum>The Web Developer Bootcamp 2021</BoxNum>
        <BoxText>Udemy</BoxText>
        <BoxText>Issued Jul 2021</BoxText>
        <BoxText>Credential ID Mikey ChowYen</BoxText>
        <BoxText> <a id="see" href= "https://www.linkedin.com/in/mikey-chow-yen-604303178/">See Credential</a></BoxText>
      </Box>
  </Boxes>
</Section>
);

export default Acomplishments;
