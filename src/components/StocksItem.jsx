import { memo } from "react";

function StocksItem(stock) {
  return (
    <tr>
      <td className="text-center">{stock.symbol}</td>
      <td className="text-center">${stock.price}</td>
      <td className="text-center">{new Date(stock.timestamp).toLocaleDateString("en-GB", { timzeone: "GMT+1" })} {new Date(stock.timestamp).toLocaleTimeString("en-GB", { timzeone: "GMT+1" })}</td>
    </tr>
  );
}

export default memo(StocksItem);