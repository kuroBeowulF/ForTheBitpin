import { useEffect, useState } from "react";
import axios from "axios";
import { MarketData } from "../../types";
import Loading from "./../Loeading/Loading";
import styled from "@emotion/styled";
import Cart from "./../MarketCart/Cart";
import { BASE_URL } from "../../Helpers/Constant";

const MarketBox = styled("div")({
  width: "80vw",
  height: "70vh",
  border: "1px solid #c4cfc7",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  padding: "15px",
  margin: "0 auto",
  marginTop: "30px",
  overflow: "auto",
  scrollbarWidth: "none",
});

export default function Market() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<MarketData[] | any>();
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL)
      .then((res) => setData(res.data.results))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : !error && data?.length > 0 ? (
        <MarketBox>
          {data.map((item: MarketData) => {
            return (
              <Cart
                key={item.id}
                title={item.title}
                currency1={item.currency1}
                currency2={item.currency2}
                priceInfo={item.internal_price_info}
                orderBook={item.order_book_info}
              />
            );
          })}
        </MarketBox>
      ) : (
        ""
      )}
    </>
  );
}
