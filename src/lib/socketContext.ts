import React, { createContext } from "react";
import { Socket } from "socket.io-client";
import { MarketData } from "../types";

export interface ISocketContextState {
  socket: Socket | undefined;
  uid: string;
  users: string[];
}
export const defaultSocketContextState: ISocketContextState = {
  socket: undefined,
  uid: "",
  users: [],
};

export type TSocketContextActions = "updateCurrency" | "removeCurrency";
export type TSocketContextPayload = string | MarketData;

export interface ISocketContextActions {
  type: TSocketContextActions;
  payload: TSocketContextPayload;
}

export const SocketReducer = (
  state: ISocketContextState,
  action: ISocketContextActions
) => {
  switch (action.type) {
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
