// Custom Hook
import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Lembre-se do último retorno de chamada.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configure o intervalo.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}