import React from "react";

const Menu = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center h-24">
          <div className="bg-blue-100 rounded-full p-2 flex space-x-4 shadow-md">
            <a
              href="#metas"
              className="text-blue-700 hover:bg-blue-300 hover:text-white px-6 py-2 rounded-full text-lg font-medium transition duration-300"
            >
              Metas
            </a>
            <a
              href="#inicio"
              className="text-blue-700 hover:bg-blue-300 hover:text-white px-6 py-2 rounded-full text-lg font-medium transition duration-300"
            >
              Inicio
            </a>
            <a
              href="#perfil"
              className="text-blue-700 hover:bg-blue-300 hover:text-white px-6 py-2 rounded-full text-lg font-medium transition duration-300"
            >
              Perfil
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
