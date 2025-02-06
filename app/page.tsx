"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./components/menu";
import PrincipalContainer from "./components/principalcontainer";
import PieChart from "./components/PieChart";
import BillsLayout from "./layouts/BillsLayout";
import IncomeLayout from "./layouts/IncomeLayout";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("gastos");

  const data = [
    { name: "Ingresos", value: 15000 },
    { name: "Gastos", value: 9000 },
  ];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Menu />
      <PrincipalContainer bgColor="bg-gray-100" padding="p-4">
        <div className="flex justify-center items-center text-gray-900">
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gráfico de torta */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <PieChart />
            </motion.div>

            {/* Resumen Financiero */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Resumen Financiero
              </h2>
              <div className="space-y-4">
                <motion.div
                  className="bg-green-200 p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-lg font-semibold text-green-800">
                    Ingresos
                  </p>
                  <p className="text-2xl font-bold text-green-900">
                    ${data[0].value.toLocaleString()}
                  </p>
                </motion.div>
                <motion.div
                  className="bg-red-200 p-4 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-lg font-semibold text-red-800">Gastos</p>
                  <p className="text-2xl font-bold text-red-900">
                    ${data[1].value.toLocaleString()}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </PrincipalContainer>

      {/* Botones de selección con animación */}
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Botones de selección */}
        <div className="flex justify-center mt-6">
          <div className="bg-slate-100 rounded-full p-2 flex space-x-4 shadow-md">
            {["gastos", "ingresos"].map((option) => (
              <button
                key={option}
                type="button"
                className={`px-6 py-2 rounded-full text-lg font-medium transition duration-300 flex items-center space-x-2 ${
                  selectedOption === option
                    ? "bg-blue-500 text-white"
                    : "text-blue-600 hover:bg-blue-300 hover:text-white"
                }`}
                onClick={() => handleOptionChange(option)}
              >
                {option === "gastos" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tarjeta de detalles con animación */}
      <PrincipalContainer bgColor="bg-gray-100" padding="p-2">
        {selectedOption === "gastos" ? <BillsLayout /> : <IncomeLayout />}
      </PrincipalContainer>
    </>
  );
}
