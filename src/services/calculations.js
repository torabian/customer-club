export const calcTransactionPoint = (amount) => {
  let points = 0;

  if (amount > 100) {
    points += (amount - 100) * 2;
  }

  if (amount > 50) {
    points += Math.min(amount - 50, 50);
  }

  return points;
};

export const calcTransactionsTotalPoints = (transactions) => {
  return (transactions || []).reduce((prev, curr) => {
    return curr.amount + prev;
  }, 0);
};
