import { useRef, useEffect } from "react";
import io, { Socket, ManagerOptions, SocketOptions } from "socket.io-client";

export default function useSocket(
  uri: string,
  opts?: Partial<ManagerOptions & SocketOptions> | undefined
): Socket {
  const { current: socket } = useRef(io(uri, opts));
  useEffect(() => {
    if (socket) socket.close();
  }, [socket]);
  return socket;
}
