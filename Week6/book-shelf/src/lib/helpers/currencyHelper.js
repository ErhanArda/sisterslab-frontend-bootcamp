const currencies = [
  { value: 'USD', label: '$' },
  { value: 'GBP', label: '£' },
  { value: 'EUR', label: '€' },
  { value: 'TRY', label: '₺' },
];

const currencySymbol = (currencyValue) => {
  const currency = currencies.find((c) => c.value === currencyValue);

  if (!currency) {
    console.log(`Unknown currency: ${currencyValue}`);
    return '';
  }

  return currency.label;
};

export { currencies, currencySymbol };
