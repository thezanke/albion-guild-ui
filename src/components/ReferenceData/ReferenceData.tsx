import { useEffect, useState } from 'react';
import { IReferenceData } from './types';
import { useSocketRef } from '../../hooks/useSocketRef';

interface IGuildDataProps {
  loading: JSX.Element;
  children(guildData: IReferenceData): JSX.Element;
}

export const GuildData = ({ loading, children }: IGuildDataProps) => {
  const [data, setData] = useState<IReferenceData | null>(null);
  const socketRef = useSocketRef();

  useEffect(() => {
    const socket = socketRef.current;
    socket.on('referenceData', setData);
    return () => {
      socket.off('referenceData', setData);
    };
  });

  if (!data) return loading;

  return children(data);
};
