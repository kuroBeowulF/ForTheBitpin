import React, { PropsWithChildren, useReducer, useEffect } from "react";
import useSocket from "./useSocket";
import {
  defaultSocketContextState,
  SocketContextProvider,
  SocketReducer,
} from "./socketContext";
import { BASE_URL, SOCKET_URL } from "../Helpers/Constant";
import axios from "axios";

export interface ISocketContextComponentProps extends PropsWithChildren {}

const SocketContextComponent: React.FunctionComponent<
  ISocketContextComponentProps
> = (props) => {
  const { children } = props;

  const [SocketState, SocketDispatch] = useReducer(
    SocketReducer,
    defaultSocketContextState
  );

  const socket = useSocket(SOCKET_URL, {
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false,
  });

  useEffect(() => {
    // we can take this get req in onConnect of socket .
    SocketDispatch({ type: "setLoading", payload: true });
    axios
      .get(BASE_URL)
      .then((res) =>
        SocketDispatch({ type: "getAllMarketData", payload: res.data.results })
      )
      .catch(() => SocketDispatch({ type: "setError", payload: true }))
      .finally(() => SocketDispatch({ type: "setLoading", payload: false }));
  }, []);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("socket Conneted");
    });
    socket.on("sub_to_price_info", (value) => {
      console.log(value);
    });
    return () => {
      socket.off("connect", () => {
        console.log("socket Conneted");
      });
      socket.off("sub_to_price_info", (value) => {
        console.log(value);
      });
    };
  }, [socket]);

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};
export default SocketContextComponent;
