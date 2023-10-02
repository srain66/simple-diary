import moment from "moment";

export const getKeyByDate = (date: Date) => {
  return moment(date).format("YYYYMMDD");
};

export const getDateByKey = (key: string) => {
  return new Date(
    `${key.substring(0, 4)}-${key.substring(4, 6)}-${key.substring(6, 8)}`
  );
};
