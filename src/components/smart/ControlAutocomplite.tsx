import React, { FC, ReactElement } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { IControlProps } from "../../types/control.type";
import ICountry from "../../types/api.type";
import Country from "../simple/Country";

const ControlAutocomplite: FC<IControlProps> = function ({
  size,
}): ReactElement {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [countries, setCountries] = React.useState<Array<ICountry>>([]);
  const { store } = React.useContext(Context);
  return (
    <div className="country">
      <h2>Контрол для поиска стран</h2>
      <input
        value={value}
        onChange={(e) =>
          store.getCountryWithDebounce(
            e.target.value,
            setValue,
            setCountries,
            setLoading,
            size as number
          )
        }
        type="text"
        className="input"
        placeholder="Введите название страны"
      />
      {loading && <div className="spin"></div>}
      {!countries.length && !loading && (
        <div className="not-found-country">
          Для отображения стран в поле{" "}
          <strong>"Введите название страны"</strong> необходимо ввести
          наименование существующей страны!
        </div>
      )}
      {countries.length > 0 && <h2>Список стран</h2>}
      {countries.length > 0 &&
        countries.map((elem) => (
          <React.Fragment key={elem.fullName}>
            <Country
              value={elem.name}
              setValue={setValue}
              setCountries={setCountries}
              setLoading={setLoading}
              size={size as number}
              name={elem.name}
              fullName={elem.fullName}
              flag={elem.flag}
            />
          </React.Fragment>
        ))}
    </div>
  );
};

export default observer(ControlAutocomplite);
