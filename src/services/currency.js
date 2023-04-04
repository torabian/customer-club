const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatUsd = (amount) => {
  return formatter.format(amount);
};
