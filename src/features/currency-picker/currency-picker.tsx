import { useContext } from "react";
import { TCurrency } from "../../shared/types";
import { twMerge } from "tailwind-merge";
import { AppContext } from "../../app/providers/Context/AppContextProvider";
import { IContext } from "../../app/providers/Context/types";

const currencies: TCurrency[] = ["EUR", "USD", "RUB"];

export const CurrencyPicker = () => {
  const { currencyNow, setCurrencyNow } = useContext(
    AppContext
  ) as IContext;

  const handleClick = (e: React.SyntheticEvent<HTMLSpanElement>) => {
    const currentPick = e.currentTarget.getAttribute(
      "data-item"
    ) as TCurrency | null;
    if (currentPick) {
        setCurrencyNow(currentPick);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <h5 className="text-lg font-bold text-center">Валюта</h5>
      <div className="flex">
        {currencies.map((item, i, arr) => (
          <span
            className={twMerge(
              "px-6 py-3 text-sky-600 border font-bold border-gray-400 bg-white cursor-pointer hover:transition-colors hover:bg-sky-200",
              currencyNow === item && "bg-sky-600 text-white hover:bg-sky-600",
              i === 0 && "rounded-l-lg",
              i === arr.length - 1 && "rounded-r-lg"
            )}
            key={item}
            data-item={item}
            onClick={handleClick}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};
