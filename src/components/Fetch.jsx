import React, { useEffect, useState } from "react";
import '../css/bg.css';

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/yimiUsers/getlicences');
        const responseData = await response.json();
        setData(responseData.data);
        console.log(responseData.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <p>Cargando...</p>;
  }

  const currentDate = new Date(); // Obtener la fecha actual
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const slicedData = data.slice(0, 5); // Obtener solo los primeros 5 elementos

  return (
    <div>
      {slicedData.map((item) => (
        <div key={item.id} className="licence">
          <h3>Fecha de inicio: {formattedDate}</h3>
          <p>ID de usuario: {item.fk_id_usuario}</p>
          <p>ID de licencia: {item.fk_id_licencia}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;

