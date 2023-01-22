import React, { Dispatch, FC, ReactElement, SetStateAction } from "react";
import { IButton } from "../../types/button.type";
const Button: FC<IButton> = function ({
  value,
  setValue,
  callback,
  text,
}): ReactElement {
  return (
    <button
      className="button"
      onClick={() => {
        if (callback)
          callback(
            value as string,
            setValue as Dispatch<SetStateAction<string>>
          );
      }}
    >
      {text}
    </button>
  );
};
export default React.memo(Button);
