import React from "react";

interface PrincipalContainerProps {
  children: React.ReactNode;
  bgColor?: string; // Color de fondo opcional
  padding?: string; // Padding opcional
  className?: string; // Clases adicionales opcionales
}

const PrincipalContainer: React.FC<PrincipalContainerProps> = ({
  children,
  bgColor = "bg-slate-700", // Valor por defecto
  padding = "p-8",
  className = "",
}) => {
  return (
    <div className={`flex justify-center p-5 h-auto ${className}`}>
      <div
        className={`${bgColor} rounded-lg shadow-lg ${padding} w-full max-w-4xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default PrincipalContainer;
