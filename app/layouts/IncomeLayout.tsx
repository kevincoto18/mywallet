import { motion } from "framer-motion";

const IngresoCard = ({
  nombre,
  monto,
  etiqueta,
  fecha,
  descripcion,
}: {
  nombre: string;
  monto: string;
  etiqueta: string;
  fecha: string;
  descripcion: string;
}) => {
  return (
    <motion.div
      className="bg-white text-gray-800 p-4 rounded-lg shadow-lg w-full border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <div className="font-semibold text-xl truncate w-3/4">{nombre}</div>
        <p className="text-xl font-bold text-green-600">{monto}</p>
      </div>
      <span className="inline-block bg-green-100 text-green-600 text-sm font-semibold rounded-full px-3 py-1 mb-2">
        {etiqueta}
      </span>
      <p className="text-sm text-gray-500">{fecha}</p>

      <hr className="my-2 border-t border-gray-300" />
      <p className="text-sm text-gray-600">{descripcion}</p>
    </motion.div>
  );
};

export default function IncomeLayout() {
  const ingresos = [
    {
      nombre: "Venta de producto A",
      monto: "+$500",
      etiqueta: "Venta",
      fecha: "2025-02-02",
      descripcion: "Ingreso por la venta de 50 unidades del producto A.",
    },
    {
      nombre: "Consultoría externa",
      monto: "+$200",
      etiqueta: "Servicio",
      fecha: "2025-02-03",
      descripcion:
        "Consultoría ofrecida a un cliente en el sector tecnológico.",
    },
    {
      nombre: "Pago de dividendos",
      monto: "+$1,000",
      etiqueta: "Dividendos",
      fecha: "2025-01-31",
      descripcion: "Pago de dividendos de la inversión realizada en 2024.",
    },
  ];

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md mt-1 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-left text-green-700">
        Detalle Ingresos
      </h2>

      <motion.div
        className="space-y-4 text-center text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <hr />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 relative">
        {ingresos.map((ingreso, index) => (
          <div className="flex justify-center" key={index}>
            <IngresoCard {...ingreso} />
          </div>
        ))}

        {/* Botón flotante dentro del contenedor */}
        <motion.button
          className="absolute bottom-4 right-4 bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 hover:ring-8 hover:ring-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
