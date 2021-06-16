import * as React from "react";
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card";
import ContactCard from "../@lekoarts/gatsby-theme-cara/components/contact-card";
import SectionText from "../@lekoarts/gatsby-theme-cara/components/section-text";
import HeaderText from "../@lekoarts/gatsby-theme-cara/components/header-text";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  ContactCard: ({ icon, link, title, ...props }) => (
    <ContactCard {...props} icon={icon} link={link} title={title} />
  ),
  // eslint-disable-next-line react/display-name
  SectionText: ({ text, ...props }) => <SectionText {...props} text={text} />,
  // eslint-disable-next-line react/display-name
  HeaderText: ({ text, ...props }) => <HeaderText {...props} text={text} />
};

export default components;
