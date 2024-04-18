import { ticketsData } from "../model";

export const getUniqueCarriers = () => {
    const carriers = ticketsData.map(ticket => ticket.carrier);
    const unique_carriers = new Set(carriers);
    return unique_carriers;
}