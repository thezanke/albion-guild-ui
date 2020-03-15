import { useState, useEffect } from 'react';
import { useSocketRef } from './useSocketRef';
import { IGuildResponseData } from '../types';

export const useSocketData = (dataKey: string) => {
  const [data, setData] = useState<IGuildResponseData | null>(null);
  const socketRef = useSocketRef();

  useEffect(() => {
    const socket = socketRef.current;

    socket.on(dataKey, setData);
    socket.emit(`request:${dataKey}`);

    return () => {
      socket.off(dataKey, setData);
    };
  }, [socketRef]);

  return data;
};
