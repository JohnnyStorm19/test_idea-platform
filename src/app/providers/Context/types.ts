import { TCurrency } from "../../../shared/types";

export interface IContext {
  currencyNow: TCurrency;
  isChecked: string[];
  setIsChecked: React.Dispatch<React.SetStateAction<string[]>>;
  setCurrencyNow:React.Dispatch<React.SetStateAction<TCurrency>>;
}
