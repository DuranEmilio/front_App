import React, { useEffect, useState } from "react";

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

    return (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>Fecha de inicio: {item.fecha_inicio}</h3>
              <p>ID de usuario: {item.fk_id_usuario}</p>
              <p>ID de licencia: {item.fk_id_licencia}</p>
            </div>
          ))}
        </div>
    );
}

export default Fetch;