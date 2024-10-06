function StocksList({ stocks }) {
  return (
    <div>
      <ul>
        {stocks.map((stock) => (
          <StocksItem key={stock.symbol} {...stock} />
        ))}
      </ul>
    </div>
  );
}

function StocksItem(stock) {
  return (
    <li>
      {stock.symbol} - ${stock.price} - {new Date(stock.timestamp).toLocaleDateString("en-GB", { timzeone: "GMT+1" })} {new Date(stock.timestamp).toLocaleTimeString("en-GB", { timzeone: "GMT+1" })}
    </li>
  );
}

export default StocksList;