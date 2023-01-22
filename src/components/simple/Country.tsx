import React, { useContext } from "react";
import { Context } from "../..";
import { IPropsCountry } from "../../types/country.type";

const Country: React.FC<IPropsCountry> = function ({
  name,
  fullName,
  flag,
  value,
  setValue,
  setCountries,
  setLoading,
  size,
}) {
  const { store } = useContext(Context);
  return (
    <div
      onClick={() =>
        store.getCountryWithDebounce(
          value,
          setValue,
          setCountries,
          setLoading,
          size
        )
      }
      className="country__item"
    >
      <h3 className="country__title">Название страны: {name}</h3>
      <h4 className="country__subtitle">Полное название страны: {fullName}</h4>
      <img className="country__img" src={flag} alt="Флаг страны" />
    </div>
  );
};

export default Country;
