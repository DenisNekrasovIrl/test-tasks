import { getCountryByName } from "../api/apiService";
import ICountry, { TFilterAndUniqCountry } from "../types/api.type";

export const filterAndUniqCountry: TFilterAndUniqCountry = async function (
  str,
  size
) {
  const json = await getCountryByName(str);
  const uniq: {
    [index: string]: ICountry;
  } = {};
  json.forEach((elem) => {
    if (!uniq[elem.name]) uniq[elem.name] = elem;
  });
  const result = Object.values(uniq);
  if (result.length > size) result.length = size;
  return result;
};
