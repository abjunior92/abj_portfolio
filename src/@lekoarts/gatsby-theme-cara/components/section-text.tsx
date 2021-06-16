/** @jsx jsx */
import { jsx, Text } from "theme-ui";

type SectionTextProps = {
  text: string;
};

const SectionText = ({ text }: SectionTextProps) => (
  <div
    sx={{
      display: "flex",
      width: "100%",
      alignItems: "center",
      pb: "8px",
      fontSize: "36px"
    }}
  >
    <Text variant="caps">{text}</Text>
  </div>
);

export default SectionText;
