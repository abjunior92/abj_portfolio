import * as React from "react";
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card";
import ContactCard from "../@lekoarts/gatsby-theme-cara/components/contact-card";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children, ...props }) => (
    <ProjectCard {...props} link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  // eslint-disable-next-line react/display-name
  ContactCard: ({ icon, link, title, bg, children, ...props }) => (
    <ContactCard {...props} icon={icon} link={link} title={title} bg={bg}>
      {children}
    </ContactCard>
  )
};

export default components;
