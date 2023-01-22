import React, { FC, ReactElement } from "react";
import { IButton, PositionButton } from "../../types/button.type";
import Button from "./Button";

const LeftButton: FC<IButton> = React.memo(function ({
  value,
  setValue,
  callback,
  text,
}): ReactElement {
  return (
    <Button text={text} value={value} setValue={setValue} callback={callback} />
  );
});
LeftButton.displayName = PositionButton.Left;
export default LeftButton;
