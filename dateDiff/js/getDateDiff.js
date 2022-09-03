import { DateTime } from "./luxon.js";

export const getDateDiff = (dateFrom, dateTo) => {
  if (dateFrom > dateTo) {
    [dateFrom, dateTo] = [dateTo, dateFrom];
  }

  const firstDate = DateTime.fromISO(dateFrom);
  const secondDate = DateTime.fromISO(dateTo);

  return secondDate.diff(firstDate, ["years", "months", "days"]).toObject();
};
