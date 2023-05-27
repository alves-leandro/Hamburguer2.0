const CURRENCY_FOPRMATER = new Intl.NumberFormat(undefined, {
  currency: "BRL",
  style: "currency",
});

export const currencyFormat = (number: number) => {
  return CURRENCY_FOPRMATER.format(number);
};
