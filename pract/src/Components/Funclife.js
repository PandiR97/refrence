import { useState, useEffect } from 'react';
import Formhandle from './Formhandle';
import Loading from './Loading';

export default function Funclife() {
  const [counter, setCounter] = useState(<Loading/>);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => <Formhandle/>);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}



