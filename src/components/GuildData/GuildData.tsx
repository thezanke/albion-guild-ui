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
    return () => {
      socket.off('guildData', setData);
    };
  }, []);

  if (!data) return loading;

  return children(data);
};
