type TFilterAndUniqCountry = (
  str: string,
  size: number
) => Promise<Array<ICountry>>;
export interface ICountry {
  name: string;
  fullName: string;
  flag: string;
}

export type { TFilterAndUniqCountry };
export default ICountry;
