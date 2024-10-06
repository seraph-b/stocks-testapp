import { useState, useEffect } from "react";
import StocksList from "./StocksList";

function StocksDashboard() {
  const [stocks, setStocks] = useState([]);

  const handleChange = async (event) => {
    const stocksRes = await fetch('http://localhost:3000/?' + new URLSearchParams({ query: event.target.value }));
    const stocksObj = await stocksRes.json();
    setStocks(stocksObj);
  };

  return (
    <div>
      <input type="text" placeholder="SYMB" onChange={handleChange} />
      <StocksList stocks={stocks} />
    </div>
  );
}

export default StocksDashboard;