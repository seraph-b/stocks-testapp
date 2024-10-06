import { useState, useEffect } from "react";
import StocksList from "./StocksList";

function StocksDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const storedStocks = JSON.parse(localStorage.getItem("stocks"))
    setStocks(storedStocks ? storedStocks : []);
    setSearchTerm(storedStocks ? storedStocks.map((stock) => stock.symbol) : "");
  }, []);

  const handleStocksInputChange = async (event) => {
    setSearchTerm(event.target.value);
    const stocksRes = await fetch('http://localhost:3000/?' + new URLSearchParams({ query: event.target.value.replace(/\s+/g, "") }));
    const stocksObj = await stocksRes.json();
    setStocks(stocksObj);
    localStorage.setItem("stocks", JSON.stringify(stocksObj));
  };

  return (
    <div>
      <input type="text" placeholder="SYMB" value={searchTerm} onChange={handleStocksInputChange} />
      <StocksList stocks={stocks} />
    </div>
  );
}

export default StocksDashboard;