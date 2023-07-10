const Rates = {
  usd: 0.027,
  eur: 0.026,
  pln: 0.12,
};

function convert({uah, currency}) {
  if(!Rates[currency]) {
    return null;
  }

  return uah * Rates[currency];
}