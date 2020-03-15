import socketIOClient from 'socket.io-client';
import { useRef } from 'react';

const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : '';
const socket = socketIOClient(URL);

export const useSocketRef = () => {
  const socketRef = useRef(socket);
  return socketRef;
};
