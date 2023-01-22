import { Dispatch, SetStateAction } from "react";
import ICountry from "./api.type";

type TSetControl = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>
) => void;
type TGetCountry = (
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
  setCountries: Dispatch<SetStateAction<Array<ICountry>>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  size: number
) => void;
export interface IStore {
  _timer: ReturnType<typeof setTimeout> | null;
  resetControl: TSetControl;
  enterHelloWorld: TSetControl;
  callAlert: TSetControl;
  callNumberInAlert: TSetControl;
  getCountryWithDebounce: TGetCountry;
}
