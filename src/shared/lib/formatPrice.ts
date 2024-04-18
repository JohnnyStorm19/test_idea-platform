import { TCurrency } from "../types";

export const formatPrice = (price: number, currency: TCurrency) => {
    const formatter = new Intl.NumberFormat('ru-RU');
    const formattedPrice = formatter.format(price);

    let currencySymbol; 

    if (currency === "RUB") {currencySymbol = "₽"} 
    if (currency === "USD") {currencySymbol = "$"} 
    if (currency === "EUR") {currencySymbol = "€"} 

    return `${formattedPrice}${currencySymbol}`;
}