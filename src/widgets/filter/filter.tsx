import { CurrencyPicker, StopsFilter } from "../../features";

export const Filter = () => {
  return (
    <div className="h-fit flex flex-col items-center lg:gap-7 px-6 py-4 bg-white rounded-xl divide-y-2">
      <CurrencyPicker />
      <StopsFilter />
    </div>
  );
};
