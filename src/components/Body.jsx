import { useContext, useEffect } from "react";
import { NavContext } from "../Context/NavContext";
import { Proyectos } from "./Proyectos";
import { Sidebar } from "./Sidebar";
import { CV } from "./CV";
import { Contacto } from "./Contacto";
import { Certificaciones } from "./Certificaciones";

export const Body = () => {

  const { selected } = useContext(NavContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selected]);

  const renderContent = () => {
    switch (selected) {
      case "proyectos":
        return <Proyectos />;
      case "cv":
        return <CV />;
      case "contacto":
        return <Contacto />;
      case "certificaciones":
        return <Certificaciones />;
      default:
        return <Proyectos />;
    }
  };

  return (
    <div className="mx-auto p-4 text-white">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

        <div className="
          flex flex-col items-center md:items-start 2xl:items-center
          bg-gradient-to-b from-[#132A36] to-[#0B1D26]
          border border-gray-800 rounded-xl
          shadow-lg shadow-black/40
          p-6
          md:col-span-1
        ">
          <Sidebar />
        </div>

        <div className="p-4 md:col-span-3">
          {renderContent()}
        </div>

      </div>
    </div>
  );
};
