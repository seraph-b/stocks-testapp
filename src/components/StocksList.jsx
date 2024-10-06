function StocksList({ stocks }) {
  return (
    <div className="w-full border-2 border-slate-700 rounded-md">
      <table className="w-full">
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Time</th>
        </tr>
        {stocks.length ? stocks.map((stock) => (
          <StocksItem key={stock.symbol} {...stock} />
        ))
        :
        <tr><td colSpan="3" className="text-center italic">No stocks found</td></tr>
        }
      </table>
    </div>
  );
}

function StocksItem(stock) {
  return (
    <tr>
      <td className="text-center">{stock.symbol}</td>
      <td className="text-center">${stock.price}</td>
      <td className="text-center">{new Date(stock.timestamp).toLocaleDateString("en-GB", { timzeone: "GMT+1" })} {new Date(stock.timestamp).toLocaleTimeString("en-GB", { timzeone: "GMT+1" })}</td>
    </tr>
  );
}

export default StocksList;