export default function truncateText(str, length, dir = "rtl") {
  if (str === undefined || str === null) return "";
  if (str.length <= length) return str;
  const clipped = str.slice(0, length);
  return dir === "ltr" ? "..." + clipped : clipped + "...";
}
