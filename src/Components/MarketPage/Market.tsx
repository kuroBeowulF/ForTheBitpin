import { useContext } from "react";
import { MarketData } from "../../types";
import Loading from "./../Loeading/Loading";
import styled from "@emotion/styled";
import Cart from "./../MarketCart/Cart";
import SocketContext from "../../lib/socketContext";

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
  const { SocketState } = useContext(SocketContext);

  return (
    <>
      {SocketState?.loading ? (
        <Loading />
      ) : !SocketState?.error && SocketState?.markets?.length > 0 ? (
        <MarketBox>
          {SocketState.markets.map((item: MarketData) => {
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
