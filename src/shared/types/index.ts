import { getUniqueCarriers } from "../lib/getUniqueCarriers";

export type TTicket = {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
};
export type TTicketsResponse = TTicket[];

export type TUniqueCarriers = ReturnType<typeof getUniqueCarriers>;
export type TCurrency = "RUB" | "USD" | "EUR"
