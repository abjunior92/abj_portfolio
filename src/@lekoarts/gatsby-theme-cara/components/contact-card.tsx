/** @jsx jsx */
import { jsx } from "theme-ui";
import IconsPicker from "./icons-picker";

type ContactCardProps = {
  icon: string;
  link: string;
  title: string;
  switchColor: string;
};

const ContactCard = ({ icon, switchColor, link, title }: ContactCardProps) => (
  <div sx={{ display: "flex", alignItems: "center", pb: "20px" }}>
    {icon && (
      <span
        sx={{
          display: "flex",
          alignItems: "center",
          pr: "20px",
          width: "48px",
          height: "24px"
        }}
      >
        <IconsPicker icon={icon} switchColor={switchColor} />
      </span>
    )}
    <a
      href={link}
      target="_blank"
      sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}
    >
      {title}
    </a>
  </div>
);

export default ContactCard;
