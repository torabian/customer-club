import { createFakeTransactions } from "./mockGenerator";

export const getTransactions = async () => {
  return new Promise((resolve) => {
    // @todo - use fetch instead
    setTimeout(() => {
      resolve(createFakeTransactions());
    }, 2500);
  });
};
