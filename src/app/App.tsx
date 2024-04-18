import { useMemo, useState } from "react";
import { ticketsData } from "../shared/model";
import { TCurrency } from "../shared/types";
import { TicketsList } from "../entities";
import { Filter } from "../widgets";
import { AppContextProvider } from "./providers";

const CURRENCY: TCurrency = "RUB";

const App = () => {
  const [currencyNow, setCurrencyNow] = useState<TCurrency>(CURRENCY);
  const [isChecked, setIsChecked] = useState<string[]>([]);

  const sortedTicket = useMemo(() => {
    if (isChecked.includes('all') || isChecked.length === 0) {
      return ticketsData;
    }
    if (isChecked.includes('none')) {
      return ticketsData.filter(ticket => ticket.stops === 0);
    }
    return ticketsData.filter(ticket => isChecked.includes(`stop_${ticket.stops}`));
  }, [isChecked])

  return (
    <AppContextProvider values={{ isChecked, setIsChecked, currencyNow, setCurrencyNow }}>
      <div className="min-h-screen p-7 flex flex-wrap justify-center gap-4 bg-sky-100 transition-all">
        <Filter />
        <TicketsList ticketsData={sortedTicket} />
      </div>
    </AppContextProvider>
  );
};

export default App;
