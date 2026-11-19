export function toPersianDigits(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  if (n === undefined || n === null) return "";
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}
