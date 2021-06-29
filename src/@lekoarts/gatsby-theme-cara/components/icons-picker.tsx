/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui";

type IconsPickerProps = {
  icon: string;
  switchColor: string;
};

const getSwitchedColor = (icon, switchColor, colorMode) => {
  let iconColor = "";
  if (!switchColor) {
    iconColor = icon;
  } else if (switchColor === colorMode) {
    iconColor = icon;
  } else {
    iconColor = `${icon}_${switchColor}`;
  }
  return iconColor;
};

const IconsPicker = ({ icon, switchColor }: IconsPickerProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const iconColor = getSwitchedColor(icon, switchColor, colorMode);
  const imported = require(`../../../images/${iconColor}.svg`);
  return <img height="24" width="48" src={imported} />;
};

export default IconsPicker;
