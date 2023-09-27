const formatWeek = (name: string): string =>
  translateWeek(name).substring(0, 1).toUpperCase();

const translateWeek = (name: string): string => {
  switch (name.charAt(0)) {
    case "월":
      return "Monday";
    case "화":
      return "Tuesday";
    case "수":
      return "Wednesday";
    case "목":
      return "Thursday";
    case "금":
      return "Friday";
    case "토":
      return "Saturday";
    case "일":
      return "Sunday";
    default:
      return "day";
  }
};

export default formatWeek;
