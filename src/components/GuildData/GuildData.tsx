import socketIOClient from 'socket.io-client';
import { useEffect, useState } from 'react';
import { IGuildResponseData } from './types';

interface IGuildDataProps {
  loading: JSX.Element;
  children(guildData: IGuildResponseData): JSX.Element;
}

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : '';

export const GuildData = (props: IGuildDataProps) => {
  const [data, setData] = useState<IGuildResponseData | null>(null);

  useEffect(() => {
    const socket = socketIOClient(URL);

    socket.on('response:guildData', setData);

    return () => {
      socket.close();
    };
  }, []);

  if (!data) return props.loading;

  return props.children(data);
};
