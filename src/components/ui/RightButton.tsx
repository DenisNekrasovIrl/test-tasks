import React, { FC, ReactElement } from "react";
import { IButton, PositionButton } from "../../types/button.type";
import Button from "./Button";

const RightButton: FC<IButton> = React.memo(function ({
  value,
  setValue,
  callback,
  text,
}): ReactElement {
  return (
    <Button text={text} value={value} setValue={setValue} callback={callback} />
  );
});
RightButton.displayName = PositionButton.Right;
export default RightButton;
