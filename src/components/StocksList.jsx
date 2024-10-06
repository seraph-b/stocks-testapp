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

function StocksItem({ stock }) {
  return (
    <li>
      {stock.symbol} - ${stock.price} - {stock.timestamp}
    </li>
  );
}

export default StocksList;