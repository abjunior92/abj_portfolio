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
      mb: 4
    }}
  >
    <Text variant="section">{text}</Text>
  </div>
);

export default SectionText;
