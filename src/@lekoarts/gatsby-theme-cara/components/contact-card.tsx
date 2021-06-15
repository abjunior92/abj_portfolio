/** @jsx jsx */
import { jsx } from "theme-ui";

type ContactCardProps = {
  icon: React.ReactNode;
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
};

const ContactCard = ({ icon, link, title, children, bg }: ContactCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [2],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`
      }
    }}
  >
    <div sx={{ pr: "20px", width: "24px", height: "24px" }}>{icon}</div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
      {children}
    </div>
    <div
      sx={{
        pt: 2,
        fontSize: [2, 3],
        fontWeight: `medium`,
        lineHeight: 1
      }}
    >
      {title}
    </div>
  </a>
);

export default ContactCard;
