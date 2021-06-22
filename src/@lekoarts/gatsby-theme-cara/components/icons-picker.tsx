/** @jsx jsx */
import { jsx } from "theme-ui";

type IconsPickerProps = {
  icon: string;
};

const IconsPicker = ({ icon }: IconsPickerProps) => {
  const imported = require(`../../../images/${icon}.svg`);
  return <img height="24" width="48" src={imported} />;
};

export default IconsPicker;
