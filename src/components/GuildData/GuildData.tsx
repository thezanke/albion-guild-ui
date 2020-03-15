import { useEffect, useState } from 'react';
import { IGuildResponseData } from './types';
import { useSocketRef } from '../../hooks/useSocketRef';

interface IGuildDataProps {
  loading: JSX.Element;
  children(guildData: IGuildResponseData): JSX.Element;
}

export const GuildData = ({ loading, children }: IGuildDataProps) => {
  const [data, setData] = useState<IGuildResponseData | null>(null);
  const socketRef = useSocketRef();

  useEffect(() => {
    const socket = socketRef.current;

    socket.on('guildData', setData);
    socket.emit('request:guildData');

    return () => {
      socket.off('guildData', setData);
    };
  }, [socketRef]);

  if (!data) return loading;

  return children(data);
};
