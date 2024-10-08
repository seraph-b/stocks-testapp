import { useState, useEffect } from "react";
import isEqual from "react-fast-compare";
import StocksList from "./StocksList";

function StocksDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const storedStocks = JSON.parse(localStorage.getItem("stocks"))
    setStocks(storedStocks ? storedStocks : []);
    setSearchTerm(storedStocks ? storedStocks.map((stock) => stock.symbol) : "");
  }, []);

  const handleStocksInputChange = async (searchValue) => {
    setSearchTerm(searchValue);
    const stocksRes = await fetch('http://localhost:3000/?' + new URLSearchParams({ query: searchValue.replace(/\s+/g, "") }));
    const stocksObj = await stocksRes.json();
    if (!isEqual(stocksObj, stocks))
    {
      setStocks(stocksObj);
      localStorage.setItem("stocks", JSON.stringify(stocksObj));
    }
  };

  return (
    <div className="w-full mx-auto lg:w-2/3 2xl:w-1/3 flex flex-col space-y-2">
      <input type="text" placeholder="SYMBL" value={searchTerm} onChange={(e) => {handleStocksInputChange(e.target.value)}} className="w-full border-2 border-slate-700 bg-[#21252b] text-slate-200 rounded-md p-2" />
      <div className="w-full">
        <StocksList stocks={stocks} />
      </div>
    </div>
  );
}

export default StocksDashboard;