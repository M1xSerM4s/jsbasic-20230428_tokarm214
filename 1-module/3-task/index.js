function ucFirst(str) {
  if (str && typeof str === "string") {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str;
}
