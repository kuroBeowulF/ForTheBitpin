import React, {
  PropsWithChildren,
  useReducer,
  useEffect,
  useState,
} from "react";
import useSocket from "./useSocket";
import {
  defaultSocketContextState,
  SocketContextProvider,
  SocketReducer,
} from "./socketContext";
import { BASE_URL, SOCKET_URL } from "../Helpers/Constant";
import { MarketData } from "../types";
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
  }, [socket]);

  return (
    <SocketContextProvider value={{ SocketState, SocketDispatch }}>
      {children}
    </SocketContextProvider>
  );
};
export default SocketContextComponent;
