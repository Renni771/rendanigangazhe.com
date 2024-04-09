export function formatDate(date: Date) {
  return date.toLocaleString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
