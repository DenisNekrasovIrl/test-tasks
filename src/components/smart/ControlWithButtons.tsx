import React, { ReactElement } from "react";
import { PositionButton } from "../../types/button.type";
import { IControlProps } from "../../types/control.type";

export default function ControlWithButtons(props: IControlProps) {
  const [value, setValue] = React.useState<string>("");
  return (
    <div className="control__wrapper">
      {React.Children.map(props.children, (child) => {
        if (
          (((child as ReactElement).type as any).displayName as string) ===
          PositionButton.Left
        )
          return React.cloneElement(child as ReactElement, {
            value,
            setValue,
          });
      })}
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      {React.Children.map(props.children, (child) => {
        if (
          (((child as ReactElement).type as any).displayName as string) ===
          PositionButton.Right
        )
          return React.cloneElement(child as ReactElement, {
            value,
            setValue,
          });
      })}
    </div>
  );
}
