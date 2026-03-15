import { Download } from "lucide-react";

export const CV = () => {
  return (
    <section className="">

      {/* CONTENEDOR CON BORDE (nuevo) */}
      <div className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg shadow-black/40">

        {/* TÍTULO */}
        <h2 className="text-2xl font-semibold text-[#6EE7B7] mb-4 text-center md:text-left">
          Mi Currículum
        </h2>
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 flex flex-col items-center md:items-start gap-4">

          {/* DESCRIPCIÓN */}
          <p className="text-gray-300 text-sm md:text-base text-center md:text-left">
            Aquí puedes descargar mi currículum actualizado con mi experiencia,
            formación, proyectos y habilidades técnicas.
          </p>

          {/* BOTÓN DE DESCARGA */}
          <a
            href="/curriculum/CurriculumVitae.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#6EE7B7] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#5ddbb0] transition"
          >
            <Download size={18} />
            Descargar CV
          </a>

        </div>
      </div>
    </section>
  );
};
