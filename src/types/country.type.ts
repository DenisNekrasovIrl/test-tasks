import { Dispatch, SetStateAction } from "react";
import ICountry from "./api.type";

interface IPropsCountry {
  name: string;
  fullName: string;
  flag: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setCountries: Dispatch<SetStateAction<Array<ICountry>>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  size: number;
}
export type { IPropsCountry };
