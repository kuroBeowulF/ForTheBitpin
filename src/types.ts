export type Currency1 = {
  code: string;
  color: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  for_test: boolean;
  high_risk: boolean;
  id: number;
  image: string;
  show_high_risk: boolean;
  tags: string[];
  title: string;
  title_fa: string;
  tradable: boolean;
  withdraw_commission: string;
};
export type Currency2 = {
  code: string;
  color: string;
  decimal: number;
  decimal_amount: number;
  decimal_irt: number;
  for_test: boolean;
  high_risk: boolean;
  id: number;
  image: string;
  show_high_risk: boolean;
  tags: string[];
  title: string;
  title_fa: string;
  tradable: boolean;
  withdraw_commission: string;
};
export type Internal_price_info = {
  amount: null | number;
  change: number;
  created_at: number;
  max: string;
  mean: null | number;
  min: string;
  price: string;
  time: null | string;
  value: null | string;
};
export type Order_book_info = {
  amount: string;
  change: number;
  created_at: boolean;
  max: string;
  mean: string;
  min: string;
  price: string;
  time: string;
  value: string;
};
export type Price_info = {
  amount: null | string;
  change: number;
  created_at: number;
  max: string;
  mean: null | string;
  min: string;
  price: string;
  time: null | string;
  value: null | string;
};
export interface MarketData {
  all_time_high: string;
  circulating_supply: string;
  code: string;
  currency1: Currency1;
  currency2: Currency2;
  for_test: boolean;
  id: number;
  internal_price_info: Internal_price_info;
  market_cap: string;
  order_book_info: Order_book_info;
  otc_buy_percent: string;
  otc_market: boolean;
  otc_max_buy_amount: string;
  otc_max_sell_amount: string;
  otc_sell_percent: string;
  price: string;
  price_info: Price_info;
  text: string;
  title: string;
  title_fa: string;
  tradable: boolean;
  trading_view_source: string;
  trading_view_symbol: string;
  volume_24h: string;
}
