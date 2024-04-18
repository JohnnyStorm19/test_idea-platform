import { ticketsData } from "../../../shared/model"

// возвращает массив из уникальных значений количества остановок
export const getUniqueStops = () => {
    const stops = ticketsData.map(ticket => ticket.stops).sort();
    return Array.from(new Set(stops));
}