import { TCurrency } from "../types";

// В идеале эта функция может запрашивать текущий курс валют и возвращать отформатированное до десятых число, но я очень упрощу

export const changeCurrency = (
  currencyNow: TCurrency, 
  ticketPrice: number
) => {
  if (currencyNow === "USD") {
    return ticketPrice / 94
  }
  if (currencyNow === "EUR") {
    return ticketPrice / 100
  }
  return ticketPrice
};
