import { useState, useEffect, FC } from "react";
import { getArduardoLastData } from "../../services/user.service";
import Plot from 'react-plotly.js';
//to use plotly we first need to add the types to the app 
//npm install -D @types/module-name in this case npm install -D @types/react-plotly.js and npm install -D @types/plotly.js
interface Data {
  grd_id: number;
  timestamp: string;
  address: number;
  value: number;
}

export const LastDataArduardo: FC = () => {
  const [datos, setDatos] = useState<Array<Data>>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getArduardoLastData();
      setDatos(response.data);
    };
    getData();
    console.log(datos)
  }, [setDatos]);

  return (
    <div className="w-full">
      <p className="text-white font-medium text-center">
        Aqui veremos los datos si es que estamos autentificados
      </p>
      <p className="text-white font-medium text-center">
        Ultimos 10 datos registrados
      </p>
      <div className="w-full flex justify-center py-6">
        <table className="table-auto">
          <thead>
            <tr className="">
              <th className="pb-3  text-white"> GRD Id</th>
              <th className="pb-3 text-white"> Fecha</th>
              <th className="pb-3 text-white"> Entrada</th>
              <th className="pb-3 text-white"> Valor</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((dato, i) => (
              <tr key={`data${i}`}>
                <th className="text-white" key={`grd${i}`} >{dato.grd_id}</th>
                <th className="text-white px-7" key={`time${i}`}>{dato.timestamp} </th>
                <th className="text-white px-7" key={`address${i}`}>{dato.address}</th>
                <th className="text-white px-7" key={`value${i}`}>{dato.value}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
      </div>
    </div>
  );
};


