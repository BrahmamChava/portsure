/**
 * Dummy Trade Data
 * Simulates Asset Allocation & Trade Capture module output
 * Linked with Portfolio data
 */

export const trades = [
  {
    tradeId: 301,
    portfolioId: 201,
    assetType: "Equity",
    quantity: 150,
    status: "EXECUTED"
  },
  {
    tradeId: 302,
    portfolioId: 202,
    assetType: "Bond",
    quantity: 200,
    status: "EXECUTED"
  },
  {
    tradeId: 303,
    portfolioId: 203,
    assetType: "Derivative",
    quantity: 80,
    status: "PENDING"
  },
  {
    tradeId: 304,
    portfolioId: 204,
    assetType: "Equity",
    quantity: 120,
    status: "EXECUTED"
  },
  {
    tradeId: 305,
    portfolioId: 205,
    assetType: "Bond",
    quantity: 300,
    status: "EXECUTED"
  },
  {
    tradeId: 306,
    portfolioId: 206,
    assetType: "Derivative",
    quantity: 60,
    status: "EXECUTED"
  }
];
