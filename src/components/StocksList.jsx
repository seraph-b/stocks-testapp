import StocksItem from './StocksItem';

function StocksList({ stocks }) {
  return (
    <div className="w-full border-2 border-slate-700 rounded-md">
      <table className="w-full">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {stocks.length ? stocks.map((stock) => (
            <StocksItem key={stock.symbol} {...stock} />
          ))
          :
          <tr><td colSpan="3" className="text-center italic">No stocks found</td></tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default StocksList;