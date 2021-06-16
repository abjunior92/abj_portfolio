/** @jsx jsx */
import { jsx, Text } from "theme-ui";

type SectionTextProps = {
  text: string;
};

const SectionText = ({ text }: SectionTextProps) => (
  <div
    sx={{ display: "flex", alignItems: "center", pb: "16px", fontSize: "36px" }}
  >
    <Text variant="caps">{text}</Text>
  </div>
);

export default SectionText;
