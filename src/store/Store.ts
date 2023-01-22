import { IStore } from "../types/store.type";
import { makeAutoObservable } from "mobx";
import { filterAndUniqCountry } from "../utils/api.utils";
import { Dispatch, SetStateAction } from "react";
import ICountry from "../types/api.type";

export default class Store implements IStore {
  public _timer: null | ReturnType<typeof setTimeout> = null;
  constructor() {
    makeAutoObservable(this);
  }
  public resetControl(
    value: string,
    setValue: Dispatch<SetStateAction<string>>
  ) {
    setValue("");
  }
  public enterHelloWorld(
    value: string,
    setValue: Dispatch<SetStateAction<string>>
  ) {
    setValue("Hello world!");
  }
  public callAlert(value: string, setValue: Dispatch<SetStateAction<string>>) {
    if (value === "") {
      alert("В контроле отсутствует значение!");
      return;
    }
    alert(value);
  }
  public callNumberInAlert(
    value: string,
    setValue: Dispatch<SetStateAction<string>>
  ) {
    if (value === "") {
      alert("В контроле отсутствует значение!");
      return;
    }
    if (!Object.is(+value, NaN)) {
      alert(value);
      return;
    }
    alert("Тип значения в контроле не является числовым!");
  }
  public getCountryWithDebounce(
    value: string,
    setValue: Dispatch<SetStateAction<string>>,
    setCountries: Dispatch<SetStateAction<Array<ICountry>>>,
    setLoading: Dispatch<SetStateAction<boolean>>,
    size: number
  ) {
    if (this._timer) {
      clearTimeout(this._timer);
    }
    setValue(value);
    setCountries([]);
    setLoading(true);
    this._timer = setTimeout(() => {
      filterAndUniqCountry(value, size)
        .then((result) => setCountries([...result]))
        .finally(() => setLoading(false));
    }, 1000);
  }
}
