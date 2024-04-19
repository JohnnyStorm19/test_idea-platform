import * as dayjs from "dayjs";
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
dayjs.locale('ru')

export const formatDate = (dateStr: string) => {
  const date = dayjs(`${dateStr}`, 'DD.MM.YY');
  return date.format('D MMM YYYY, dd');
};