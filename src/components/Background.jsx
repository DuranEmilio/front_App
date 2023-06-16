import React, { useEffect, useState } from 'react';
import '../css/bg.css';

const Background = () => {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/yimiUsers/getlicences');
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setCounter(data.length);
    }
  }, [data]);

  return (
    <div className="background">
      {counter}
    </div>
  );
}

export default Background;
