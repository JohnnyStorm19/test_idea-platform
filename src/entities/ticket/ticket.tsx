import { useContext, useMemo } from "react";
import { formatPrice, formatDate } from "../../shared/lib";
import { TTicket } from "../../shared/types";
import { Button, CarrierLogo } from "../../shared/ui";
import { changeCurrency } from "../../shared/lib/changeCurrency";
import { AppContext } from "../../app/providers/Context/AppContextProvider";
import { IContext } from "../../app/providers/Context/types";

interface TicketProps {
  ticketData: TTicket;
}

export const Ticket = ({ ticketData }: TicketProps) => {
  const {
    carrier,
    price,
    arrival_date,
    departure_date,
    arrival_time,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    stops,
  } = ticketData;
  const { currencyNow } = useContext(AppContext) as IContext;

  const newPrice = useMemo(() => {
    const value = changeCurrency(currencyNow, price);
    return value;
  }, [currencyNow, price]);

  const btnText = `Купить за ${formatPrice(newPrice as number, currencyNow)}`;

  const formatDeparture = formatDate(departure_date);
  const formatArrivalDate = formatDate(arrival_date);

  return (
    <div className="md:h-48 flex flex-wrap-reverse md:flex-nowrap rounded-lg bg-white shadow-md divide-x-2">
      <section className="w-full flex flex-col items-center justify-center xl:flex-1 gap-6 px-6 py-6">
        <CarrierLogo carrier={carrier} />
        <Button onClick={() => console.log("Купить!")}>{btnText}</Button>
      </section>
      <section className="w-full gap-4 px-6 py-6 flex xl:flex-2 flex-wrap justify-start sm:justify-center sm:flex-row md:justify-start">
        <div className="flex flex-col">
          <span className="ticket-time">{departure_time}</span>
          <span className="ticket-cities">
            {origin}, {origin_name}
          </span>
          <span className="ticket-date">{formatDeparture}</span>
        </div>
        <div className="flex flex-col">
          <span className="ticket-stops">
            {stops != 0 ? `Пересадок: ${stops}` : "Без пересадок"}
          </span>
          <span className="ticket-stops-icon"></span>
        </div>
        <div className="flex flex-col">
          <span className="ticket-time">{arrival_time}</span>
          <span className="ticket-cities">
            {destination}, {destination_name}
          </span>
          <span className="ticket-date">{formatArrivalDate}</span>
        </div>
      </section>
    </div>
  );
};
