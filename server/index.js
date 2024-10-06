import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const stocks = [
  { symbol: "AAPL",  price: 226.80, timestamp: Date.now() },
  { symbol: "GOOG",  price: 168.56, timestamp: Date.now() },
  { symbol: "GOOGL", price: 167.06, timestamp: Date.now() },
  { symbol: "TSLA",  price: 250.08, timestamp: Date.now() },
  { symbol: "AMZN",  price: 186.51, timestamp: Date.now() },
  { symbol: "MSFT",  price: 416.06, timestamp: Date.now() },
  { symbol: "NVDA",  price: 124.92, timestamp: Date.now() },
  { symbol: "META",  price: 595.94, timestamp: Date.now() },
  { symbol: "SONY",  price: 94.85,  timestamp: Date.now() },
  { symbol: "ORCL",  price: 170.86, timestamp: Date.now() },
];

app.get("/", (req, res) => {
  const queriedStocks = req.query.query?.toUpperCase().split(",") || [];

  const filteredStocks = stocks.filter((stock) => queriedStocks.includes(stock.symbol));
  res.send(filteredStocks);
});

app.listen(PORT, () => {
  console.log(`Stocks server running on http://localhost:${PORT}`);
});