export const toCurrency = number => {
  return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};
