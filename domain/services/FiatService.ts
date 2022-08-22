import * as HttpAdapter from '../../adapters/HttpAdapter';
import { FiatCurrencySymbol } from '../models/FiatCurrencySymbol';

const CURRENCIES_SYMBOLS_URL =
  'https://gist.githubusercontent.com/nhalstead/4c1652563dd13357ab936fc97703c019/raw/d5de097ef68f37501fb4d06030ca49f10f5f963a/currency-symbols.json';

export const getFiatCurrencies = async () => {
  const response = await HttpAdapter.get<FiatCurrencySymbol>({
    url: CURRENCIES_SYMBOLS_URL,
  });
  return response.body;
};
