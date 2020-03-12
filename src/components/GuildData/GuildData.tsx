import socketIOClient from 'socket.io-client';
import { useEffect, useState } from 'react';
import { IGuildResponseData } from './types';

interface IGuildDataProps {
  loading: JSX.Element;
  children(guildData: IGuildResponseData): JSX.Element;
}

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : '';

const connect = () => {
  const socket = socketIOClient(URL);
  return socket;
};

export const GuildData = (props: IGuildDataProps) => {
  const [data, setData] = useState<IGuildResponseData | null>(null);

  useEffect(() => {
    const socket = connect();
    socket.on('response:guildData', setData);

    socket.emit('request:guildData');
    const intvl = setInterval(() => socket.emit('request:guildData'), 10 * 1000);

    return () => {
      clearInterval(intvl);
      socket.close();
    };
  }, []);

  if (!data) {
    return props.loading;
  }

  return props.children(data);
};
