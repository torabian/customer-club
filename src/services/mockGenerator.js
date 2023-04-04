/**
 * Generates the mock information to mimic the backend
 */

import { rand } from "../utils/math";

export const createFakeTransactions = () => {
  const users = ["Ali Torabi", "Christian Anderson", "Michal Polski"];
  return Array.from(Array(20)).map((_, index) => {
    return {
      uniqueId: `key_${index}`,
      amount: rand(20, 200),
      user: {
        uniqueId: `key_${index % 3}`,
        fullName: users[index % 3],
      },
    };
  });
};
