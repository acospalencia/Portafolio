import { useContext } from 'react';
import { NavContext } from '../../Context/NavContext';

export const ProyectosLaborales = () => {

    const { setSelected } = useContext(NavContext);

    const handleClick = (value) => {
        setSelected(value);
    };
    return (
        <section>

            <div className="bg-[#111] border border-gray-800 rounded-xl p-6 shadow-lg shadow-black/40 pb-8 mb-8">

                <h2 className="text-2xl font-semibold text-[#6EE7B7] mb-6 text-center md:text-left">
                    Experiencia Laboral
                </h2>

                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 hover:border-[#6EE7B7] transition flex flex-col justify-between">

                        <div>

                            <span className="text-xs text-[#6EE7B7] bg-[#6EE7B7]/10 px-2 py-1 rounded-md">
                                Proyecto Freelance
                            </span>

                            <h3 className="text-lg font-semibold text-white mt-3">
                                Tienda Online – Variedades Steff
                            </h3>

                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                                Aplicación web desarrollada para un negocio local para la gestión
                                y venta de productos. Incluye panel administrativo, carga de
                                imágenes y control completo de inventario.
                            </p>

                            <p className="text-gray-500 text-xs mt-3">
                                React · Node.js · Express · MySQL · Cloudinary · Vercel
                            </p>

                        </div>

                        <div className="flex gap-4 mt-5">

                            <a
                                href="https://variedades-steff.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#6EE7B7] text-sm hover:underline"
                            >
                                Ver sitio →
                            </a>

                            <a 
                                onClick={() => handleClick("DetalleTiendaSteff")}
                                className="text-gray-300 text-sm hover:text-white hover:underline hover:cursor-pointer"
                            >
                                Ver detalles →
                            </a>

                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};