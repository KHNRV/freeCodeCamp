function checkCashRegister(price, cash, cid) {
  const currencies = [
    { unit: "ONE HUNDRED", amount: 10000 },
    { unit: "TWENTY", amount: 2000 },
    { unit: "TEN", amount: 1000 },
    { unit: "FIVE", amount: 500 },
    { unit: "ONE", amount: 100 },
    { unit: "QUARTER", amount: 25 },
    { unit: "DIME", amount: 10 },
    { unit: "NICKEL", amount: 5 },
    { unit: "PENNY", amount: 1 },
  ];
  const result = { status: "OPEN", change: [] };
  let change = (cash - price) * 100;

  currencies.forEach((currency, index, thisArray) => {
    const currencyInRegister = cid.find((unit) => unit[0] === currency.unit);
    const amountToTake = Math.floor(change / currency.amount) * currency.amount;

    const amountTaken =
      currencyInRegister[1] * 100 - amountToTake <= 0
        ? currencyInRegister[1] * 100
        : amountToTake;

    if (amountTaken) {
      change - amountTaken;
      change = change - amountTaken;
      result.change.push([currency.unit, amountTaken / 100]);
    }

    if (thisArray.length - 1 === index) {
      if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
      } else if (amountTaken === currencyInRegister[1] * 100) {
        result.status = "CLOSED";
        result.change = cid;
      }
    }
  });

  return result;
}
