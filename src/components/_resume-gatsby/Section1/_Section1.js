import React from 'react';

import styled from '@emotion/styled';
import { ExperienceBlock } from '../../reusableStyles/Experience/ExperienceBlock';
import { EducationBlock } from '../../reusableStyles/Education/EducationBlock';
import { SectionTitle } from '../../reusableStyles/components/Titles';
import { InlineSkillsBlock } from '../../reusableStyles/Skills/InlineSkillsBlock';
import { Projects } from '../../reusableStyles/PersonalProjects/Projects';
import { ListsVertical } from '../../reusableStyles/Lists/ListsVertical';
import { SkillLevel } from '../../reusableStyles/Skills/SkillLevel';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  padding: 4rem 0;
`;

const SectionLHS = styled.div``;

const SectionRHS = styled.div``;

export const Section1 = () => {
  return (
    <Container>
      <SectionLHS>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceBlock
          position="Sales & Freelance Web Developer"
          company="Aquasar Inc"
          date="06/2019 - Present"
          summary="Creating blazingly fast websites using Gatsby, React, WordPress, online advertising and SEO"
          location="Remote"
        />
        <ExperienceBlock
          position="Tableau CRM Data Analyst"
          company="Finning Canada"
          date="01/2017 - 07/2019"
          summary="Created corporate level dashboards, ad hoc reports and automated tasks using Tableau, SQL and RPA"
          location="Edmonton"
        />
        <ExperienceBlock
          position="Developer and Ads Consultant"
          company="Devebyte Marketing"
          date="06/2019 - Present"
          summary="Digital Marketing and SEO Company focusing on small to mid size businesses"
          location="Edmonton"
        />
        <ExperienceBlock
          position="Marketing Data Analyst"
          company="Mindable"
          date="01/2016 - 01/2017"
          summary="Mindable is a digital marketing company that specializes in astrology. Their website astrologyanswers.com is among the world's most popular astrology sites"
          location="Sherwood Park"
        />
        <ExperienceBlock
          position="Digital Marketing Expert"
          company="Go Auto"
          date="01/2015 - 01/2016"
          summary="Go Auto is Western Canada's largest auto dealer with over 40 dealerhips across Canada."
          location="Sherwood Park"
        />

        <SectionTitle>Education</SectionTitle>
        <EducationBlock
          degree="BSc. Applied Mathematics and Physics"
          school="University of Alberta"
        />
        <ListsVertical
          title="Certificates"
          listArray={[
            'Google Ads Certificate',
            'Google Analytics Certificate',
            'Google Tag Manager',
            'SOA/CSA Actuarial Exams 1-5',
          ]}
        />
      </SectionLHS>
      <SectionRHS>
        <InlineSkillsBlock
          title="top skills"
          skillsArray={[
            'Gatsby',
            'React',
            'Javascript',
            'CSS',
            'HTML',
            'SQL',
            'Tableau',
            'CMS',
            'GraphQL',
            'Google Ads',
          ]}
        />
        <Projects
          title="Select Websites"
          projectsArray={['aquasar.io', 'codepaper.dev']}
        />
        <SectionTitle>Technical Skills</SectionTitle>
        <SkillLevel skill="Gatsby" level={9} />
        <SkillLevel skill="React" level={9} />
        <SkillLevel skill="SQL" level={9} />
        <SkillLevel skill="JavaScript" level={8} />
        <SkillLevel skill="CSS" level={8} />
        <SkillLevel skill="HTML" level={8} />
        <SkillLevel skill="CMS" level={8} />
        <SkillLevel skill="APIs" level={8} />
        <SkillLevel skill="GraphQL" level={8} />
        <SkillLevel skill="Tableau" level={8} />
        <SkillLevel skill="UX/UI" level={7} />
        <SkillLevel skill="Node" level={6} />
        <SkillLevel skill="MongoDB" level={5} />
        <div style={{ marginBottom: '3rem' }}></div>
        <InlineSkillsBlock
          title="Other Knowledgeable Areas"
          skillsArray={[
            'Google Ads',
            'Facebook Ads',
            'Shopify',
            'WordPress',
            'Data Analytics',
            'SEO',
            'Google Tag Manager',
          ]}
        />
      </SectionRHS>
    </Container>
  );
};
