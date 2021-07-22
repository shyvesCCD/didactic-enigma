import { Scatter } from "react-chartjs-2";

const Graphic = ({ valueF1, valueF2, valueF3, valueF4, valueF5, valueF6 }) => {
  const value = {
    datasets: [
      {
        label: "Gráfico",
        data: [
          {
            x: valueF1,
            y: valueF2,
          },
          {
            x: valueF3,
            y: valueF4,
          },
          {
            x: valueF5,
            y: valueF6,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        max: 2500,
        min: 0,
      },
      y: {
        max: 2500,
        min: 0,
      },
    },
  };

  return (
    <div>
      <Scatter data={value} options={options} />
    </div>
  );
};

export default Graphic;
