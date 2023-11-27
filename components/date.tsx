import { parseISO, format } from "date-fns";

interface DateProps {
  dateString: Date | any
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MM/d/yyyy")}</time>;
}
