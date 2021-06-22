/** @jsx jsx */
import { jsx, Text } from "theme-ui";

type HeaderTextProps = {
  text: string;
};

const HeaderText = ({ text }: HeaderTextProps) => (
  <div
    sx={{
      display: "flex",
      alignItems: "center"
    }}
  >
    <Text variant="header">{text}</Text>
  </div>
);

export default HeaderText;
