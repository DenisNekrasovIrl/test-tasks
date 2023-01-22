import React, { Dispatch, SetStateAction } from "react";
import { observer } from "mobx-react-lite";
import "./App.css";
import ControlWithButtons from "./components/smart/ControlWithButtons";
import { Context } from ".";
import RightButton from "./components/ui/RightButton";
import LeftButton from "./components/ui/LeftButton";
import ControlAutocomplite from "./components/smart/ControlAutocomplite";

function App() {
  const { store } = React.useContext(Context);
  return (
    <div>
      <ControlWithButtons>
        <RightButton
          text="Сброс"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.resetControl(value, setValue)}
        />
        <RightButton
          text="ХеллоВорлд"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.enterHelloWorld(value, setValue)}
        />
      </ControlWithButtons>
      <ControlWithButtons>
        <RightButton
          text="Алерт"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.callAlert(value, setValue)}
        />
        <LeftButton
          text="Вывод числа"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.callNumberInAlert(value, setValue)}
        />
      </ControlWithButtons>
      <ControlWithButtons>
        <RightButton
          text="Алерт"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.callAlert(value, setValue)}
        />
        <LeftButton
          text="Вывод числа"
          callback={(
            value: string,
            setValue: Dispatch<SetStateAction<string>>
          ) => store.callNumberInAlert(value, setValue)}
        />
      </ControlWithButtons>
      <ControlAutocomplite size={3} />
      <ControlAutocomplite size={10} />
    </div>
  );
}

export default observer(App);
