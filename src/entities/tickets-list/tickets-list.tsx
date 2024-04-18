import { TTicket } from "../../shared/types";
import { Ticket } from "../ticket/index";

interface TicketsListProps {
  ticketsData: TTicket[];
}

export const TicketsList = ({ ticketsData }: TicketsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {ticketsData.map((ticket, i) => (
        <Ticket key={i} ticketData={ticket} />
      ))}
    </div>
  );
};
