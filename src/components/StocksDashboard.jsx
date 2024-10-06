import { useState, useEffect } from "react";
import StocksList from "./StocksList";

function StocksDashboard() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const storedStocks = localStorage.getItem("stocks")
    storedStocks ? setStocks(JSON.parse(storedStocks)) : null;
  }, []);

  const handleStocksInputChange = async (event) => {
    const stocksRes = await fetch('http://localhost:3000/?' + new URLSearchParams({ query: event.target.value }));
    const stocksObj = await stocksRes.json();
    setStocks(stocksObj);
    localStorage.setItem("stocks", JSON.stringify(stocksObj));
  };

  return (
    <div>
      <input type="text" placeholder="SYMB" onChange={handleStocksInputChange} />
      <StocksList stocks={stocks} />
    </div>
  );
}

export default StocksDashboard;