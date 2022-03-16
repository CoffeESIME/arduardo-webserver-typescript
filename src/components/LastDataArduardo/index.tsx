import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getArduardoLastData } from "../../services/user.service";
import { getByAddress } from "../../ConvertData/convertData";
import Plot from "react-plotly.js";
//to use plotly we first need to add the types to the app
//npm install -D @types/module-name in this case npm install -D @types/react-plotly.js and npm install -D @types/plotly.js
interface Data {
  grd_id: number;
  timestamp: string;
  address: string;
  value: number;
}

export const LastDataArduardo = () => {
  const nav = useNavigate();
  const [datos, setDatos] = useState<Array<Data>>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getArduardoLastData();
        setDatos(response.data);
      } catch (error) {
        window.localStorage.removeItem("user");
        nav("/");
      }
    };
    getData();
  }, [nav]);
  const filtered = getByAddress(datos, "1");
  const yAxes = filtered.map((data) => {
    return data.value;
  });
  const time = filtered.map((data) => {
    return  data.timestamp;
  });

  return (
    <div className="w-full">
      <p className="text-white font-medium text-center">
        Aqui veremos los datos si es que estamos autentificados
      </p>
      <p className="text-white font-medium text-center">
        Ultimos 10 datos registrados
      </p>
      <div className="w-full flex flex-col justify-center items-center py-6">
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
                <th className="text-white" key={`grd${i}`}>
                  {dato.grd_id}
                </th>
                <th className="text-white px-7" key={`time${i}`}>
                  {dato.timestamp.replace(/T|Z/g, ' ')}
                </th>
                <th className="text-white px-7" key={`address${i}`}>
                  {dato.address}
                </th>
                <th className="text-white px-7" key={`value${i}`}>
                  {dato.value}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10">
        <Plot
        className=""
        config={{modeBarButtonsToRemove: ['toImage','lasso2d', 'select2d'], displaylogo:false}}
          data={[
            {
              x: time,
              y: yAxes,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "green" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          layout={{
            width: 620,
            height: 300,
            title: "Una grafica simple",
            xaxis: {
              range: [time[0], time[time.length - 1]],
              type: "date",
            },
            font: {
              size: 12,
              color: "white",
            },
            plot_bgcolor: "#34495E",
            paper_bgcolor: " #34495E ",
            margin:{b:50, l:50, r:150}
          }}
        />
        </div>
      </div>
    </div>
  );
};
