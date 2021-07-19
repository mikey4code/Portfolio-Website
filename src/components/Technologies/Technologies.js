import React from 'react';
import { DiFirebase, DiReact, DiCode } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider divider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies.
  </SectionText>
  <List>
    <ListItem>
      <picture>
        <DiReact size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiece with <br />
          Vue.js <br />
          CSS  <br />
          Bootstrap  <br />
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiFirebase size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node  <br />
          Express  <br />
          Api and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <picture>
        <DiCode size="3rem" />
      </picture>
      <ListContainer>
        <ListTitle>Others</ListTitle>
        <ListParagraph>
          Experience with <br />
          Java  <br />
          Javascript  <br />
          Python
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider colorAlt />
</Section>
);

export default Technologies;
