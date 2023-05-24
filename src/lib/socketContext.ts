import React, { createContext } from "react";
import { Socket } from "socket.io-client";
import { MarketData } from "../types";

export interface ISocketContextState {
  socket: Socket | undefined;
  id: string;
  loading: boolean;
  error: boolean;
  markets: MarketData[];
}
export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
  id: "",
  loading: false,
  error: false,
  markets: [],
};

export type TSocketContextActions =
  | "getAllMarketData"
  | "updateCurrency"
  | "removeCurrency"
  | "setLoading"
  | "setError";
export type TSocketContextPayload = any | MarketData;

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (
  state: ISocketContextState,
  action: ISocketContextActions
) => {
  switch (action.type) {
    case "getAllMarketData":
      return { ...state, markets: action.payload };
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setError":
      return { ...state, error: action.payload };
    case "updateCurrency":
      return state;
    case "removeCurrency":
      return state;
    default:
      return state;
  }
};

export interface ISocketContextProps {
  SocketState: ISocketContextState;
  SocketDispatch: React.Dispatch<ISocketContextActions>;
}

const SocketContext = createContext<ISocketContextProps>({
  SocketState: defaultSocketContextState,
  SocketDispatch: () => {},
});

export const SocketContextConsumer = SocketContext.Consumer;
export const SocketContextProvider = SocketContext.Provider;

export default SocketContext;
