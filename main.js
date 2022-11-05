import { symbols } from "./stockSymbol.js";

symbols.map((stocks) => {
  let stockName = stocks.name;
  console.log(`Stock Name is ${stockName}`);
}); // mapped the names of the stocks

// let exchanges = symbols.map((exchangeName) => exchangeName.exchange); // mapped all the stockExchanges
// let uniqueExchanges = [...new Set(exchanges)]; // setting the unique exchange
// logging stockName to console
// console.log(uniqueExchanges); // logging unique exchange to console
// if (uniqueExchanges === "NYSE") {
//   console.log(
//     symbols.map((symbol) => {
//       symbol.name;
//     })
//   );
// }
// can't log the stockName of the specific exchange like all the stocks under "NYSE"
