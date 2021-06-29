/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
};

const handleOnClick = () => {};

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      onClick={() => setOpenDetails(!openDetails)}
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4],
        color: `white`,
        background: bg || `none`,
        transition: `all .9s ease !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`
        }
      }}
    >
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pb: 2,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1
        }}
      >
        {title}
      </div>
      {openDetails && (
        <div
          sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}
        >
          {children}
        </div>
      )}
    </a>
  );
};

export default ProjectCard;
