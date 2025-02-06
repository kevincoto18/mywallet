"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import React from "react";

// Registrar los componentes necesarios
ChartJS.register(ArcElement, Tooltip);

const PieChart: React.FC = () => {
  const data = {
    labels: [
      "Salario",
      "Freelance",
      "Inversión",
      "Renta",
      "Comida",
      "Transporte",
    ],
    datasets: [
      {
        data: [1500, 800, 600, 400, 300, 200], // Valores quemados
        backgroundColor: [
          "#2ecc71",
          "#27ae60",
          "#1abc9c", // Tonos verdes (ingresos)
          "#e74c3c",
          "#d35400",
          "#f39c12", // Tonos rojos/naranjas (gastos)
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Pie data={data} options={{ plugins: { legend: { display: false } } }} />
    </div>
  );
};

export default PieChart;
