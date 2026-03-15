import { Award } from "lucide-react";

export const Certificaciones = () => {
  const lista = [
    {
      nombre: "Full Stack Junnior",
      entidad: "Kodigo",
      año: "2025",
      archivo: "/diplomas/FSJ.pdf",
    },
    {
      nombre: "Java Fundamentals",
      entidad: "ORACLE",
      año: "2023",
      archivo: "/diplomas/JavaFundamentals.pdf",
    },
    {
      nombre: "Database Fundations",
      entidad: "ORACLE",
      año: "2023",
      archivo: "/diplomas/OracleDb.pdf",
    },
    ,
    {
      nombre: "Programador en C#",
      entidad: "Capacitate para el empleo",
      año: "2025",
      archivo: "/diplomas/prograC.pdf",
    },
    ,
    {
      nombre: "Control de versiones",
      entidad: "Capacitate para el empleo",
      año: "2025",
      archivo: "/diplomas/versiones.pdf",
    },
    ,
    {
      nombre: "Administrador de bases de datos",
      entidad: "Capacitate para el empleo",
      año: "2024",
      archivo: "/diplomas/BdCapacitate.pdf",
    }
  ];

  const abrirPDF = (ruta) => {
    window.open(ruta, "_blank");
  };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg shadow-black/40">
      <h2 className="text-2xl font-semibold text-[#6EE7B7] mb-4">
        Certificaciones
      </h2>

      <p className="text-gray-300 mb-6">
        Aquí puedes ver algunas de mis certificaciones más relevantes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lista.map((item, index) => (
          <div
            key={index}
            onClick={() => abrirPDF(item.archivo)}
            className="border border-gray-700 bg-[#1A1A1A] rounded-lg p-4 hover:border-[#6EE7B7] transition shadow-md cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <Award className="text-[#6EE7B7]" size={28} />

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.nombre}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.entidad} • {item.año}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
