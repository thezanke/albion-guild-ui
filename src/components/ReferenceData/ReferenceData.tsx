import { useEffect, useState } from 'react';
import { IReferenceData } from './types';
import { useSocketRef } from '../../hooks/useSocketRef';

interface IReferenceDataProps {
  loading: JSX.Element;
  children(ReferenceData: IReferenceData | null): JSX.Element;
}

export const ReferenceData = ({ loading, children }: IReferenceDataProps) => {
  const [data, setData] = useState<IReferenceData | null>(null);
  const socketRef = useSocketRef();

  useEffect(() => {
    const socket = socketRef.current;

    socket.on('referenceData', setData);
    socket.emit('request:referenceData');

    return () => {
      socket.off('referenceData', setData);
    };
  }, [socketRef]);

  if (!data) return loading;

  return children(data);
};
