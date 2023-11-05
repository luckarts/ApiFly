import { format } from 'date-fns';

export function DateTransformer(date: string) {
  const originalDate = new Date(date);
  const transformedDate = format(originalDate, 'dd MMM yyyy HH:mm:ss');
  return transformedDate;
}

export function ShortDateTransform(date: string) {
  const originalDate = new Date(date);
  const transformedDate = format(originalDate, 'dd MMM');
  return transformedDate;
}
