import { Dispatch, SetStateAction } from "react";

enum PositionButton {
  Right = "Right",
  Left = "Left",
}
interface IButton {
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  callback?: (
    value: string,
    setValue: Dispatch<SetStateAction<string>>
  ) => void;
  text?: string;
}

export { PositionButton };
export type { IButton };
