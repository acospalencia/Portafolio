import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';

export const DetalleTiendaSteff = () => {

    const { setSelected } = useContext(NavContext);

    const handleClick = (value) => {
        setSelected(value);
    };


    return (
        <section className="max-w-5xl mx-auto px-6 py-10">

            <button
                onClick={() => handleClick("proyectos")}
                className="text-gray-300 text-sm hover:text-white hover:underline mb-8"
            >
                ← Volver a proyectos
            </button>

            <div className="mb-10">
                <h1 className="text-3xl font-bold text-white mb-4">
                    Tienda Online – Variedades Steff
                </h1>

                <p className="text-gray-400 max-w-3xl">
                    Aplicación web desarrollada como proyecto freelance para un negocio
                    local con el objetivo de digitalizar su catálogo de productos y
                    permitir la gestión sencilla de inventario mediante un panel
                    administrativo.
                </p>

                <a
                    href="https://variedades-steff.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#6EE7B7] hover:underline"
                >
                    Ver sitio web →
                </a>
            </div>


            <div className="grid gap-10 md:grid-cols-2">

                <div>
                    <h2 className="text-xl font-semibold text-[#6EE7B7] mb-3">
                        Problema
                    </h2>

                    <p className="text-gray-400">
                        El negocio necesitaba una forma de mostrar su catálogo en línea
                        sin depender únicamente de redes sociales y poder administrar
                        sus productos de forma sencilla desde un panel interno.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[#6EE7B7] mb-3">
                        Solución
                    </h2>

                    <p className="text-gray-400">
                        Se desarrolló una aplicación web full stack que permite gestionar
                        productos, subir imágenes y mantener actualizado el catálogo
                        disponible para los clientes.
                    </p>
                </div>

            </div>


            <div className="mt-12">
                <h2 className="text-xl font-semibold text-[#6EE7B7] mb-4">
                    Funcionalidades principales
                </h2>

                <ul className="grid gap-3 md:grid-cols-2 text-gray-400 list-disc ml-6">
                    <li>Panel administrativo para gestión de productos</li>
                    <li>CRUD completo de productos</li>
                    <li>Subida de imágenes con Cloudinary</li>
                    <li>Visualización pública del catálogo</li>
                    <li>API REST para comunicación frontend/backend</li>
                    <li>Despliegue en la nube con Vercel</li>
                </ul>
            </div>


            <div className="mt-12">
                <h2 className="text-xl font-semibold text-[#6EE7B7] mb-4">
                    Tecnologías utilizadas
                </h2>

                <div className="flex flex-wrap gap-3 text-sm">

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        React
                    </span>

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        Node.js
                    </span>

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        Express
                    </span>

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        MySQL
                    </span>

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        Cloudinary
                    </span>

                    <span className="bg-[#1a1a1a] border border-gray-700 px-3 py-1 rounded">
                        Vercel
                    </span>

                </div>
            </div>

        </section>
    );
};