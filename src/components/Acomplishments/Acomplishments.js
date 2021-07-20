import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, SocialIcons, IconContainer, Join, joi, Title, SubTitle, Boxa } from './AcomplishmentsStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { AcomplishmentsData } from '../../constants/constants';
import { ListItem } from '../Technologies/TechnologiesStyles';

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
